from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo', last_name='User', username='Demo', email='demo@aa.io', password='password')
    user2 = User(
        first_name='Lily', last_name='Potter', username='Lily', email='lily@aa.io', password='password')
    user3 = User(
        first_name='Harry', last_name='Potter', username='Harry', email='harrye@aa.io', password='password')
    user4 = User(
        first_name='James', last_name='Potter', username='James', email='james@aa.io', password='password')
    user5 = User(
        first_name='Sirius', last_name='Black', username='Sirius', email='sirius@aa.io', password='password')
    user6 = User(
        first_name='Ron', last_name='Weasley', username='Ron', email='ron@aa.io', password='password')
    user7 = User(
        first_name='Hermoine', last_name='Granger', username='Hermoine', email='hermoine@aa.io', password='password')
    user8 = User(
        first_name='Albus', last_name='Dumbledore', username='Albus', email='albus@aa.io', password='password')
    user9 = User(
        first_name='Severus', last_name='Snape', username='Severus', email='severus@aa.io', password='password')
    user10 = User(
        first_name='Tom', last_name='Riddle', username='Tom', email='tom@aa.io', password='password')


    db.session.add(demo)
    db.session.add(user2)
    db.session.add(user3)
    db.session.add(user4)
    db.session.add(user5)
    db.session.add(user6)
    db.session.add(user7)
    db.session.add(user8)
    db.session.add(user9)
    db.session.add(user10)

    demo.following.append(user2)
    demo.following.append(user3)
    demo.following.append(user4)
    demo.following.append(user5)
    demo.following.append(user6)
    demo.following.append(user7)
    user2.following.append(user3)
    user2.following.append(user4)
    user2.following.append(user5)
    user2.following.append(user6)
    user2.following.append(user7)
    user2.following.append(user8)
    user2.following.append(user9)
    user2.following.append(user10)
    user3.following.append(user10)
    user3.following.append(user2)
    user3.following.append(user4)
    user3.following.append(user5)
    user3.following.append(user6)
    user4.following.append(user2)
    user4.following.append(user3)
    user4.following.append(user5)
    user4.following.append(user6)
    user4.following.append(user7)
    user4.following.append(user8)
    user4.following.append(user9)
    user5.following.append(user2)
    user5.following.append(user3)
    user5.following.append(user4)
    user5.following.append(user6)
    user5.following.append(user7)
    user5.following.append(user8)
    user5.following.append(user9)
    user5.following.append(user10)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
