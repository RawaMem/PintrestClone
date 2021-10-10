from app.models import db, Category
from pinterestCloneProject.app.models import category


def seed_categories():
    category1 = Category(
        user_id=1, category
    )

def undo_categories():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
