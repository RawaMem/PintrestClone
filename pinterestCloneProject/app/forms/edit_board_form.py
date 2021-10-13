from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, SubmitField, IntegerField
from wtforms.validators import DataRequired


class EditBoardForm(FlaskForm):
    id = IntegerField('User Id', validators=[DataRequired()])
    user_id = IntegerField('User Id', validators=[DataRequired()])
    title = StringField('Title', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    private = BooleanField('Private', validators=[DataRequired()])
    submit = SubmitField('Submit')
