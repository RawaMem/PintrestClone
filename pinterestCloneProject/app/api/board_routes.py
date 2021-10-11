from flask import Blueprint, render_template, redirect, request
from app.models import db
from app.models.board import Board
from app.forms.new_board_form import NewBoardForm
from app.forms.edit_board_form import EditBoardForm


bp = Blueprint('boards', __name__, url_prefix='boards')

# get all boards for a user
@bp.route('/')
def get_boards():
    boards = Board.query.all()
    return{
        'boards': {board.id:board.to_dict() for board in boards}
    }


# delete a single board
@app.route('/delete/<int:id>')
def delete(id):
    # deleted_board = Board.query.filter(Board.id == id).first()
    Board.query.filter(Board.id == id).delete()
    db.session.commit()

    boards = Board.query.all()
    return{
        'boards': {board.id:board.to_dict() for board in boards}
    }


# create a new board
@app.route('/new', methods=['POST'])
def add_new_board():
    form = NewBoardForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        board = Board(
            user_id=form.data['user_id'],
            title=form.data['title'],
            description=form.data['description'],
            private=form.data['private'],
        )
        db.session.add(board)
        db.session.commit()

        boards = Board.query.all()
        return{
            'boards': {board.id:board.to_dict() for board in boards}
        }
    else:

        return form.errors


# edit a single board
@app.route('/edit/<int:id>', methods=['POST'])
def edit_board(id):
    form = EditBoardForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        board = Board.query.filter_by(id=id).first()

        board.user_id=form.data['user_id']
        board.title=form.data['title']
        board.description=form.data['description']
        board.private=form.data['private']

        db.session.commit()

        boards = Board.query.all()
        return{
            'boards': {board.id:board.to_dict() for board in boards}
        }

    else:
        return form.errors
