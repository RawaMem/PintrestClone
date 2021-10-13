from app.models import db, Board

def seed_boards():
    board1 = Board(
        user_id=1, title="Anime", description="World of imaginations", private=False
    )
    board2 = Board(
        user_id=1, title="Fluffy Animals", description="Look at those cute puff balls", private=False
    )
    board3 = Board(
        user_id=1, title="Recipe", description="Tip of our tougue", private=False
    )
    board4 = Board(
        user_id=2, title="Travel Lists", description="Dream places to visit", private=False
    )
    board5 = Board(
        user_id=2, title="Scenic Pictures", description="Peace and harmony", private=False
    )
    board6 = Board(
        user_id=2, title="Colonial Houses", description="Classic colonial houses", private=False
    )
    board7 = Board(
        user_id=1, title="All Pins", description="All Pins", private=False
    )
    board8 = Board(
        user_id=2, title="All Pins", description="All Pins", private=False
    )
    board9 = Board(
        user_id=3, title="All Pins", description="All Pins", private=False
    )
    board10 = Board(
        user_id=4, title="All Pins", description="All Pins", private=False
    )
    board11 = Board(
        user_id=5, title="All Pins", description="All Pins", private=False
    )
    board12 = Board(
        user_id=6, title="All Pins", description="All Pins", private=False
    )
    board13 = Board(
        user_id=7, title="All Pins", description="All Pins", private=False
    )
    board14 = Board(
        user_id=8, title="All Pins", description="All Pins", private=False
    )
    board15 = Board(
        user_id=9, title="All Pins", description="All Pins", private=False
    )
    board16 = Board(
        user_id=10, title="All Pins", description="All Pins", private=False
    )

    db.session.add(board1)
    db.session.add(board2)
    db.session.add(board3)
    db.session.add(board4)
    db.session.add(board5)
    db.session.add(board6)
    db.session.add(board7)
    db.session.add(board8)
    db.session.add(board9)
    db.session.add(board10)
    db.session.add(board11)
    db.session.add(board12)
    db.session.add(board13)
    db.session.add(board14)
    db.session.add(board15)
    db.session.add(board16)

    # pin_boards_list = [
    #     {'board_id':1, 'pin_id':1, 'notified':False},
    #     {'board_id':1, 'pin_id':2, 'notified':False},
    #     {'board_id':1, 'pin_id':3, 'notified':False},
    #     {'board_id':1, 'pin_id':4, 'notified':False},
    #     {'board_id':1, 'pin_id':5, 'notified':False},
    #     {'board_id':1, 'pin_id':6, 'notified':False},
    #     {'board_id':2, 'pin_id':7, 'notified':False},
    #     {'board_id':2, 'pin_id':8, 'notified':False},
    #     {'board_id':2, 'pin_id':9, 'notified':False},
    #     {'board_id':3, 'pin_id':1, 'notified':False},
    #     {'board_id':3, 'pin_id':2, 'notified':False},
    #     {'board_id':3, 'pin_id':3, 'notified':False}
    # ]



    db.session.commit()



def undo_boards():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
