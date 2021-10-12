from flask import Blueprint,
redirect, request
from app.models import db
from app.models.comment import Comment
from flask_wtf.csrf import generate_csrf
from app.forms.new_comment_form import NewCommentForm


bp = Blueprint('comments', __name__, url_prefix='comments')

@bp.route('/')
def get_comments():
    comments = Comment.query.all()
        return{
            'comments':{comment.id:comment.to_dict() for comment in comments}
        }

# create a new comment
@bp.route('/', methods=['POST'])
def create_new_comment():
    form= NewCommentForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        new_comment = Comment(
            user_id = current_user.id,
            pin_id = current_pin.id,
            content =form.data['content']
            notified = form.data['notified']
            #ASK ABOOUT NOTIFIED
        )
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()
    else:
        return form.errors


#edit a comment
@bp.route('/<int:id>', methods=['PATCH'])
def edit_comment(id):
    form = EditCommentForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        comment = Comment.query.filter(id=id).first()
        
        comment.user_id=current_user.id,
        comment.pin_id = current_pin.id,
        comment.content=form.data['content']
        comment.notified = form.data['notified']

        db.session.commit()
        #return all comments
        comments = Comment.query.all()
        return [comment.to_dict() for comment in comments]

    else:
        return form.errors

# delete a comment
@bp.route('/<int:id>', method=['DELETE'])
def delete_comment(id):
    deleted_comment = Comment.query.filter(Comment.id = id).first()
    db.session.delete(deleted_comment)
    db.session.commit()

    return delete_comment.to_dict()