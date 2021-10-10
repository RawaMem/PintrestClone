from app.models import db, Category

def seed_categories():
    category1 = Category(
        user_id=1, category='cat'
    )

def undo_categories():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
