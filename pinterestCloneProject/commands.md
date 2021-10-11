flask db init
flask db migrate -m 'create tables'
flask db upgrade

flask seed all
flask seed undo


CREATE USER pinterest_clone_user WITH PASSWORD 'password' CREATEDB;
CREATE DATABASE pinterest_clone_db WITH OWNER pinterest_clone_user;
