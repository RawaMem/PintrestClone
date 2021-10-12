from app.models import db, Pin

def seed_pins():
    pin1 = Pin(
        user_id=2, title='Kimetsu No Yaiba', media_url='https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg', description='Demon Slayer Anime'
    )
    pin2 = Pin(
        user_id=2, title='Cute Cat', media_url='https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg', description='Beautiful gray cat'
    )
    pin3 = Pin(
        user_id=2, title='Thai Red Curry Noodle Soup', media_url='https://s23209.pcdn.co/wp-content/uploads/2018/04/Thai-Red-Curry-Noodle-SoupIMG_4787.jpg', description='Craving red curry? This Asian-inspired dish is what you need! Packed with tender bites of chicken and the perfect amount of spice.'
    )
    pin4 = Pin(
        user_id=2, title='Homemade Vegetable Potstickers or Dumplings', media_url='https://i0.wp.com/thefoodietakesflight.com/wp-content/uploads/2020/08/e345f8_1810b7177a1042cca1135e8b130069b5mv2_d_4000_6000_s_4_2.jpg?w=740&ssl=1', description='Homemade dumpling wrappers packed with a tofu and veggie filling!'
    )
    pin5 = Pin(
        user_id=2, title='Kawaii', media_url='https://i.pinimg.com/564x/ae/f8/b5/aef8b5e66f936573ac2fa507bb5f62c9.jpg', description='Cute anime girl'
    )
    pin6 = Pin(
        user_id=2, title="Do you think I'm beautiful", media_url='https://i.pinimg.com/564x/97/46/0b/97460b629e3b43e6fa1ea04fca4e1256.jpg', description=' devoted to cute little animols such as puppers, cates and turtles, and all sorts of other cute animals'
    )
    pin7 = Pin(
        user_id=2, title='She’s very photogenic', media_url='https://i.pinimg.com/564x/a3/a2/f2/a3a2f2445698c9f77c3703f04acef39e.jpg', description='Pictures, videos, articles, and questions featuring and about cats.'
    )
    pin8 = Pin(
        user_id=2, title='Colonial-Style House with Enduring Charm', media_url='https://i.pinimg.com/564x/b1/9b/37/b19b37ff8072e36b0161c8d2f1408765.jpg', description='The timeless aesthetic offers a sense of history and an elegant look that remains popular today.'
    )
    pin9 = Pin(
        user_id=2, title='Scenic freeway', media_url='https://i.pinimg.com/564x/b6/82/92/b68292df7021c6fd8e80eaf8824b8124.jpg', description='Demon Slayer Anime'
    )
    pin10 = Pin(
        user_id=2, title='Nusa Penida, Bali', media_url='https://i.pinimg.com/564x/77/ba/33/77ba33c067c7bb21eceeb6e688b43560.jpg', description='The awesome Nusa Penida in Bali. The 17 best things to do Nusa Penida island in Bali.'
    )

    db.session.add(pin1)
    db.session.add(pin2)
    db.session.add(pin3)
    db.session.add(pin4)
    db.session.add(pin5)
    db.session.add(pin6)
    db.session.add(pin7)
    db.session.add(pin8)
    db.session.add(pin9)
    db.session.add(pin10)
    db.session.commit()



def undo_pins():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
