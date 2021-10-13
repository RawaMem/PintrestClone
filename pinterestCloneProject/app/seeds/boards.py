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

    db.session.add(board1)
    db.session.add(board2)
    db.session.add(board3)
    db.session.add(board4)
    db.session.add(board5)
    db.session.add(board6)

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
