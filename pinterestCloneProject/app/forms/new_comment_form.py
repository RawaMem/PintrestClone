from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField, SubmitField
from wtforms.validators import DataRequired

class NewCommentForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    pin_id = IntegerField('pin_id', validators=[DataRequired()])
    content = StringField('content',validators= [DataRequired()])
    notified = BooleanField('notified', validators=[DataRequired()])
    submit = SubmitField('Submit')

