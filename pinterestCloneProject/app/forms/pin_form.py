from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class PinForm(FlaskForm):
    
    title = StringField('pin_title', validators=[DataRequired()])
    media_url = StringField('pin_url', validators=[DataRequired()])
    description = StringField('pin_description', validators=[DataRequired()])
