from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class NewCommentForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    pin_id = IntegerField('pin_id', validators=[DataRequired()])
    content = StringField('content', [DataRequired()])
    notified = BooleanField('notified', [DataRequired()])
    submit = SubmitField('Submit')

