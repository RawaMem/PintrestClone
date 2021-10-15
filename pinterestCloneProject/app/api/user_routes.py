from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User
from app.models import db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/follow-user/<int:userid>/<int:followingid>', methods=['POST'])
def add_follow(userid, followingid):
    user = User.query.filter(User.id == userid).first()
    followed_user = User.query.filter(User.id == followingid).first()
    # print('============>@@@@@@@@this is user', user.id, 'this is followed_user', followed_user.id)
    followed_user.following.append(user)
    db.session.commit()
    return user.to_dict()


@user_routes.route('/unfollow-user/<int:userid>/<int:followingid>', methods=['POST'])
def remove_follow(userid, followingid):
    user = User.query.filter(User.id == userid).first()
    followed_user = User.query.filter(User.id == followingid).first()
    # following = User.query.filter(User.id == followingid).first()
    # new_follower_list = [following for following in followed_user.followers if following != userid]
    # followed_user.followers = new_follower_list
    followed_user.following.remove(user)
    db.session.commit()
    user = User.query.filter(User.id == userid).first()
    return user.to_dict()
