from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, SubmitField, IntegerField
from wtforms.validators import DataRequired

class EditCommentForm(FlaskForm):
    # user_id = IntegerField('user_id', validators=[DataRequired()])
    # pin_id = IntegerField('pin_id', validators=[DataRequired()])
    id = IntegerField('id', validators=[DataRequired()])
    content = StringField('content', validators=[DataRequired()])
