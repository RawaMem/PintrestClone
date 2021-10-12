from flask import Blueprint, render_template, redirect, request
from app.models import db
from app.models.board import Board
from app.forms.new_board_form import NewBoardForm
from app.forms.edit_board_form import EditBoardForm
from flask_login import current_user


board_routes = Blueprint('boards', __name__, url_prefix='/boards')

# get all boards for a user
@board_routes.route('/')
def get_boards():
    boards = Board.query.all()
    # return [board.to_dict() for board in boards]

    return {board.id:board.to_dict() for board in boards}


# delete a single board
@board_routes.route('/delete/<int:id>')
def delete(id):
    deleted_board = Board.query.filter(Board.id == id).first()
    db.session.delete(deleted_board)
    db.session.commit()

    # boards = Board.query.all()
    # return [board.to_dict() for board in boards]
    return deleted_board.to_dict()


# create a new board
@board_routes.route('/new', methods=['POST'])
def add_new_board():
    form = NewBoardForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        new_board = Board(
            user_id=current_user.id,
            title=form.data['title'],
            description=form.data['description'],
            private=form.data['private'],
        )
        db.session.add(new_board)
        db.session.commit()

        # boards = Board.query.all()
        # return [board.to_dict() for board in boards]

        return new_board.to_dict()
    else:

        return form.errors


# edit a single board
@board_routes.route('/edit/<int:id>', methods=['POST'])
def edit_board(id):
    form = EditBoardForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        board = Board.query.filter(Board.id == id).first()

        board.user_id=current_user.id
        board.title=form.data['title']
        board.description=form.data['description']
        board.private=form.data['private']

        db.session.commit()

        # boards = Board.query.all()
        # return [board.to_dict() for board in boards]

        return board.to_dict()

    else:
        return form.errors
