from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo', last_name='User', username='Demo', email='demo@aa.io', password='password')
    lily = User(
        first_name='Lily', last_name='Potter', username='Lily', email='lily@aa.io', password='password')
    harry = User(
        first_name='Harry', last_name='Potter', username='Harry', email='harrye@aa.io', password='password')
    james = User(
        first_name='James', last_name='Potter', username='James', email='james@aa.io', password='password')
    sirius = User(
        first_name='Sirius', last_name='Black', username='Sirius', email='sirius@aa.io', password='password')
    ron = User(
        first_name='Ron', last_name='Weasley', username='Ron', email='ron@aa.io', password='password')
    hermoine = User(
        first_name='Hermoine', last_name='Granger', username='Hermoine', email='hermoine@aa.io', password='password')
    albus = User(
        first_name='Albus', last_name='Dumbledore', username='Albus', email='albus@aa.io', password='password')
    severus = User(
        first_name='Severus', last_name='Snape', username='Severus', email='severus@aa.io', password='password')
    tom = User(
        first_name='Tom', last_name='Riddle', username='Tom', email='tom@aa.io', password='password')


    db.session.add(demo)
    db.session.add(lily)
    db.session.add(harry)
    db.session.add(james)
    db.session.add(sirius)
    db.session.add(ron)
    db.session.add(hermoine)
    db.session.add(albus)
    db.session.add(severus)
    db.session.add(tom)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
