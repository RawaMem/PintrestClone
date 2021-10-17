from flask import Blueprint,redirect, request
from app.models import db
from app.models.comment import Comment
from flask_wtf.csrf import generate_csrf
from app.forms.new_comment_form import NewCommentForm
from app.forms.edit_comment_form import EditCommentForm
from flask_login import current_user


comment_routes = Blueprint('comments', __name__, url_prefix='/comments')


@comment_routes.route('/')
def get_comments():
    comments = Comment.query.all()
    return{ comment.id:comment.to_dict() for comment in comments}

# edit single comment
@comment_routes.route('/edit/<int:commentId>', methods=['PATCH'])
def edit_one_comment(commentId):
    form = EditCommentForm()
    print('this is request data @@@@@', request.get_json())
    requestData = request.get_data(as_text=True)
    edittedString = requestData[22:-2]
    print('this should be the editted string@@@@@=====>', edittedString)

    print('this is the saved data workaround @@@', requestData)
    # print('this is request cookies', form.data)
    # print('this is form in route', form.data)
    # .update({comment.content: form.data['content'], comment.user_id: current_user.id})
    # form["csrf_token"].data = request.cookies["csrf_token"]
    comment =Comment.query.filter(Comment.id == commentId).first()
    # print("--------",comment)
    # print("@@@@@",form.data)
    # print("--------##---",request.get_json())
    # print("----JSON---",request.json)
    # if form.validate_on_submit():
    #     # print("@@@@@",form.data)
    #     comment.content=form.data['content']

    #     db.session.commit()
    #     return comment.to_dict()
    comment.content = edittedString
    db.session.commit()
    print("--------%%%----",comment.content)
    return comment.to_dict()


    # else:
    #     # print("^^^^^^^^^^^",form.errors)
    #     return form.errors


# create a new comment

@comment_routes.route('/new', methods=['POST'])
def create_new_comment():
    print("we're here")
    form= NewCommentForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    # if form.validate_on_submit():
    new_comment = Comment(
        user_id = current_user.id,
        pin_id = form.data['pin_id'],
        content =form.data['content'],
        notified = form.data['notified']
    )
    db.session.add(new_comment)
    db.session.commit()
    return new_comment.to_dict()
    # else:
    #     return form.errors


#edit a comment

# @comment_routes.route('/edit/<int:id>', methods=['PATCH'])
# def edit_comment(id):
#     form = EditCommentForm()
#     form["csrf_token"].data = request.cookies["csrf_token"]
#     if form.validate_on_submit():
#         comment = Comment.query.filter(Comment.id==id).first()

#         comment.user_id=current_user.id,
#         comment.pin_id = form.data['pin_id']
#         comment.content=form.data['content']
#         comment.notified = form.data['notified']

#         db.session.commit()
#         #return all comments
#         comments = Comment.query.all()
#         return [comment.to_dict() for comment in comments]

#     else:
#         return form.errors

# delete a comment

@comment_routes.route('/delete/<int:id>', methods=['DELETE'])
def delete_comment(id):
    deleted_comment = Comment.query.filter(Comment.id == id).first()
    db.session.delete(deleted_comment)
    db.session.commit()

    return deleted_comment.to_dict()
