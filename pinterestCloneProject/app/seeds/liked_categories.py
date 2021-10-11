from app.models import db, LikedCategory
from app.models import liked_category

def seed_liked_categories():
    liked_category1 = LikedCategory(
        user_id=1, category='Cat'
    )
    liked_category2 = LikedCategory(
        user_id=2, category='Anime'
    )
    liked_category3 = LikedCategory(
        user_id=3, category='Cute Animal'
    )
    liked_category4 = LikedCategory(
        user_id=1, category='Houses'
    )
    liked_category5 = LikedCategory(
        user_id=2, category='Ocean View'
    )
    liked_category6 = LikedCategory(
        user_id=3, category='Places to Travel'
    )
    liked_category7 = LikedCategory(
        user_id=1, category='Recipe'
    )

    db.session.add(liked_category1)
    db.session.add(liked_category2)
    db.session.add(liked_category3)
    db.session.add(liked_category4)
    db.session.add(liked_category5)
    db.session.add(liked_category6)
    db.session.add(liked_category7)
    db.session.commit()

def undo_liked_categories():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
