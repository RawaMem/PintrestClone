import os
import requests
from flask import Blueprint, redirect, request
from flask import Blueprint, redirect
from app.models import db, Pin
from flask_wtf.csrf import generate_csrf
from app.forms.pin_form import PinForm


bp = Blueprint("pins", __name__, url_prefix="")

@bp.route('/')
def home():
    pins = Pin.query.all()
    return{
        'pins': {pin.id:pin.to_dict() for pin in pins}
    }


@bp.route('/pins', methods=['POST'])
def create_new_pin():
    form = PinForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    data = form.data
    if form.validate_on_submit():
        new_pin = Pin(
            title=data['title'],
            media_url=data['media_url'],
            description=data['description']
        )
        db.session.add(new_pin)
        
