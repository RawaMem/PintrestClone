from flask import Blueprint, redirect, request
from flask import Blueprint, redirect
from app.models import db, Pin
from flask_wtf.csrf import generate_csrf
from app.forms.pin_form import PinForm
from app.forms.edit_pin_form import EditPinForm
from flask_login import current_user


pin_routes = Blueprint("pins", __name__, url_prefix="")

@pin_routes.route('/pins')
def home():
    pins = Pin.query.all()
    return{
        'pins': {pin.id:pin.to_dict() for pin in pins}
    }


@pin_routes.route('/pins/add', methods=['POST'])
def create_new_pin():
    form = PinForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    data = form.data
    if form.validate_on_submit():
        new_pin = Pin(
            user_id=current_user.id,
            title=data['title'],
            media_url=data['media_url'],
            description=data['description']
        )
        db.session.add(new_pin)
        db.session.commit()
        return new_pin.to_dict()
    else:
        return form.errors


@pin_routes.route('/pins/edit/<int:id>', methods=['PATCH'])
def edit_pins(id):
    form = EditPinForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    data = form.data
    if form.validate_on_submit():
        pin = Pin.query.filter(Pin.id == id).first()

        pin.user_id = current_user.id
        pin.title = data['title']
        pin.media_url = data['media_url']
        pin.description = data['description']

        db.session.commit()
        return {
            'pin': pin.to_dict()
        }


@pin_routes.route('/pins/<int:id>')
def get_one_pin(id):
    pin = Pin.query.filter(Pin.id == id).first()
    return{
        'pin': pin.to_dict()
    }


@pin_routes.route('/pins/delete/<int:id>', methods=['DELETE'])
def delete_pin(id):
    delete_pin = Pin.query.filter(Pin.id == id).first()
    db.session.delete(delete_pin)
    db.session.commit()

    return {
        'delete_pin': delete_pin.to_dict()
    }
