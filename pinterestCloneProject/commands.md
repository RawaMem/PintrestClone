flask db init
flask db migrate -m 'create tables'
flask db upgrade

flask seed all
flask seed undo
