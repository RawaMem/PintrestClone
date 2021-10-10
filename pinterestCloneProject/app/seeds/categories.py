from app.models import db, Category


def seed_categories():
    op.bulk_insert(Category,
        [
            {'id':1, 'user_id':1, 'category':'cats'}
        ],
        multiinsert=False
    )

def undo_categories():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
