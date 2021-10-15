from flask import Blueprint, render_template, redirect, request
from app.models import db
from app.models.board import Board
from app.models.pin import Pin
from app.forms.new_board_form import NewBoardForm
from app.forms.edit_board_form import EditBoardForm
from flask_login import current_user


board_routes = Blueprint('boards', __name__, url_prefix='/boards')

# get all boards for a user
@board_routes.route('/')
def get_boards():
    boards = Board.query.all()

    return {board.id:board.to_dict() for board in boards}

# get single board
@board_routes.route('/<int:id>')
def get_one_board(id):
    board = Board.query.filter(Board.id == id).first()
    return board.to_dict()


# delete a single board
@board_routes.route('/delete/<int:id>')
def delete(id):
    deleted_board = Board.query.filter(Board.id == id).first()
    db.session.delete(deleted_board)
    db.session.commit()
    return deleted_board.to_dict()


# create a new board
@board_routes.route('/new', methods=['POST'])
def add_new_board():
    form = NewBoardForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        new_board = Board(
            user_id=form.data['user_id'],
            title=form.data['title'],
            description=form.data['description'],
            private=False
        )
        db.session.add(new_board)
        db.session.commit()

        return new_board.to_dict()
    else:

        return form.errors


# edit a single board
@board_routes.route('/edit/<int:id>', methods=['PATCH'])
def edit_board(id):
    form = EditBoardForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        board = Board.query.filter(Board.id == id).first()

        board.user_id=current_user.id
        board.title=form.data['title']
        board.description=form.data['description']
        board.private=False

        db.session.commit()
        return board.to_dict()

    else:
        return form.errors



@board_routes.route('/add-pin-board/<int:boardid>/<int:pinid>', methods=['POST'])
def add_pin_to_board(boardid, pinid):
    board = Board.query.filter(Board.id == boardid).first()
    pin = Pin.query.filter(Pin.id == pinid).first()
    board.pins.append(pin)
    db.session.commit()
    return board.to_dict()


@board_routes.route('/remove-pin-board/<int:boardid>/<int:pinid>', methods=['POST'])
def remove_pin_to_board(boardid, pinid):
    board = Board.query.filter(Board.id == boardid).first()
    pin = Pin.query.filter(Pin.id == pinid).first()
    # pin = Pin.query.filter(Pin.id == pinid).first()
    # new_pin_list = [pin for pin in board.pins if pin.id != pinid]
    # board.pins = new_pin_list
    board.pins.remove(pin)
    db.session.commit()
    return board.to_dict()
