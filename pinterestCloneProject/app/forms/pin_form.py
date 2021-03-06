from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class PinForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    title = StringField('pin_title', validators=[DataRequired()])
    media_url = StringField('pin_url', validators=[DataRequired()])
    description = StringField('pin_description', validators=[DataRequired()])
