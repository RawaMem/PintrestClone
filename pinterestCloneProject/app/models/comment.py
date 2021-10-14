from .db import db

class Comment(db.Model):
    __tablename__='comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    pin_id=db.Column(db.Integer, db.ForeignKey('pins.id'), nullable=False)
    content=db.Column(db.String, nullable=False)
    notified=db.Column(db.Boolean, nullable=False)
    # one to many
    user=db.relationship('User', back_populates='comments',lazy='subquery')
    # one to many
    pin=db.relationship('Pin', back_populates='comments')
    # one to many
    comment_likes=db.relationship('CommentLike', back_populates='comment', cascade="all, delete-orphan")


    def to_dict(self):
        return {
            'id':self.id,
            'user_id':self.user_id,
            'pin_id':self.pin_id,
            'content':self.content,
            'notified':self.notified,
            'user':self.user.to_dict()
        }
