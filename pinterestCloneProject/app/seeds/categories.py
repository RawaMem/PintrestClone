from app.models import db, Category

def seed_categories():
    category1 = Category(
        user_id=1, category='Cat'
    )
    category2 = Category(
        user_id=2, category='Anime'
    )
    category3 = Category(
        user_id=1, category='Recipe'
    )
    category4 = Category(
        user_id=3, category='Cute Animal'
    )
    category5 = Category(
        user_id=3, category='Houses'
    )
    category6 = Category(
        user_id=1, category='Scenic Road'
    )
    category7 = Category(
        user_id=2, category='Ocean View'
    )
    category8 = Category(
        user_id=2, category='Places to Travel'
    )
    category9 = Category(
        user_id=3, category='Anime Girls'
    )
    category10 = Category(
        user_id=1, category='Asian Cuisine'
    )

    db.session.add(category1)
    db.session.add(category2)
    db.session.add(category3)
    db.session.add(category4)
    db.session.add(category5)
    db.session.add(category6)
    db.session.add(category7)
    db.session.add(category8)
    db.session.add(category9)
    db.session.add(category10)
    db.session.commit()

def undo_categories():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
