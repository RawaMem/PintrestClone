from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


follows = db.Table(
    "follows",
    db.Column("follower_id", db.Integer, db.ForeignKey("users.id")),
    db.Column("followed_id", db.Integer, db.ForeignKey("users.id")),
    db.Column('notified', db.Boolean, default=False)
)

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    followers = db.relationship(
            "User",
            secondary=follows,
            primaryjoin=(follows.c.follower_id == id),
            secondaryjoin=(follows.c.followed_id == id),
            backref=db.backref("following", lazy="dynamic"),
            lazy="dynamic"
    )
    boards = db.relationship('Board', back_populates='user')
    pins = db.relationship('Pin', back_populates='user', lazy='subquery')
    comments = db.relationship('Comment', back_populates='user',lazy='subquery')
    comment_likes = db.relationship('CommentLike', back_populates='user')
    categories = db.relationship('Category', back_populates='user')
    pin_likes=db.relationship('PinLike', back_populates='user')
    # user_liked_categories = db.relationship('Category', back_populates='user', secondary=liked_categories)
    liked_categories = db.relationship('LikedCategory', back_populates='user')

    def follow(self, user):
        if user.id not in self.followers:
            self.following.append(user.id)
            return self


    def unfollow(self, user):
        if user.id in self.followers:
            self.following.remove(user.id)
            return self


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'username': self.username,
            'email': self.email,
            'followers': [user.id for user in self.followers],
            'boards': [board.id for board in self.boards],
            'pins': [pin.id for pin in self.pins]
        }
