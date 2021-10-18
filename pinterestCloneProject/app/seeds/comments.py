from app.models import db, Comment

def seed_comments():
    comment1 = Comment(
        user_id=1, pin_id=7, content="This kitty's eyes are as blue as blue sapphires", notified=False
    )
    comment2 = Comment(
        user_id=1, pin_id=4, content="Yummy!!", notified=False
    )
    comment3 = Comment(
        user_id=2, pin_id=3, content="Love thai food", notified=False
    )
    comment4 = Comment(
        user_id=1, pin_id=1, content="Kimetsu no Yaiba!!!!!!!!", notified=False
    )
    comment5 = Comment(
        user_id=1, pin_id=5, content="Kawaii", notified=False
    )
    comment6 = Comment(
        user_id=3, pin_id=6, content="Don't you want to give this cute little thing a kiss?", notified=False
    )
    comment7 = Comment(
        user_id=1, pin_id=2, content="Nice pepper color", notified=False
    )
    comment8 = Comment(
        user_id=2, pin_id=8, content="Look like a house from the 1910s", notified=False
    )
    comment9 = Comment(
        user_id=1, pin_id=9, content="What a beautiful peaceful view", notified=False
    )
    comment10 = Comment(
        user_id=3, pin_id=10, content="ocean, beach, sun... I'm coming... Bali ", notified=False
    )
    comment11 = Comment(
        user_id=3, pin_id=2, content="She's adorable", notified=False
    )
    comment12 = Comment(
        user_id=1, pin_id=3, content="good quote!", notified=False
    )
    comment13 = Comment(
        user_id=3, pin_id=4, content="I can eat this all day", notified=False
    )
    comment14 = Comment(
        user_id=2, pin_id=5, content="What anime is this?", notified=False
    )
    comment15 = Comment(
        user_id=3, pin_id=6, content="Look at those eyes!", notified=False
    )
    comment16 = Comment(
        user_id=1, pin_id=6, content="What breed is it?", notified=False
    )
    comment17 = Comment(
        user_id=1, pin_id=7, content="aww", notified=False
    )
    comment18 = Comment(
        user_id=2, pin_id=8, content="Beautiful house", notified=False
    )
    comment19 = Comment(
        user_id=3, pin_id=9, content="Definetly on my to watch list", notified=False
    )
    comment20 = Comment(
        user_id=3, pin_id=10, content="ugh I need a vacation, hope you\'re having fun!", notified=False
    )
    comment21 = Comment(
        user_id=2, pin_id=11, content="Please bring me next time!", notified=False
    )
    comment22 = Comment(
        user_id=3, pin_id=12, content="I'm going there in 2 weeks!, any recommendations?", notified=False
    )
    comment22 = Comment(
        user_id=2, pin_id=13, content="How long will you be there for?", notified=False
    )
    comment22 = Comment(
        user_id=3, pin_id=14, content="Wow, its beautiful!", notified=False
    )
    comment22 = Comment(
        user_id=2, pin_id=14, content="so jealous", notified=False
    )
    comment22 = Comment(
        user_id=3, pin_id=15, content="so jealous!", notified=False
    )
    comment22 = Comment(
        user_id=6, pin_id=16, content="Definetly going for my honeymoon!", notified=False
    )
    comment22 = Comment(
        user_id=1, pin_id=17, content="I was in Tokyo last year, definetly should've visited Kyoto!", notified=False
    )
    comment22 = Comment(
        user_id=1, pin_id=18, content="All my friends loved it!", notified=False
    )
    comment22 = Comment(
        user_id=1, pin_id=19, content="What a view!", notified=False
    )
    comment22 = Comment(
        user_id=2, pin_id=20, content="You're making me hungry..", notified=False
    )
    comment22 = Comment(
        user_id=1, pin_id=21, content="Enjoy your time threre!", notified=False
    )
    comment22 = Comment(
        user_id=3, pin_id=22, content="you are so talented", notified=False
    )
    comment22 = Comment(
        user_id=2, pin_id=23, content="I can't wait to try the food there", notified=False
    )
    comment23 = Comment(
        user_id=2, pin_id=4, content="Did you make those?!", notified=False
    )



    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    db.session.add(comment11)
    db.session.add(comment12)
    db.session.add(comment13)
    db.session.add(comment14)
    db.session.add(comment15)
    db.session.add(comment16)
    db.session.add(comment17)
    db.session.add(comment18)
    db.session.add(comment19)
    db.session.add(comment20)
    db.session.add(comment21)
    db.session.add(comment22)
    db.session.add(comment23)
    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
