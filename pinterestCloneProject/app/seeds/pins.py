from app.models import db, Pin

def seed_pins():
    pin1 = Pin(
        user_id=1, title='Kimetsu No Yaiba', media_url='https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg', description='Demon Slayer Anime'
    )
    pin2 = Pin(
        user_id=1, title='Cute Cat', media_url='https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg', description='Beautiful gray cat'
    )
    pin3 = Pin(
        user_id=1, title='- your past self is proud!', media_url='https://i.pinimg.com/564x/4d/77/a4/4d77a469cbac584ca504f5703b41d6d7.jpg', description='Don\'t just exist, live. #Live #Life'
    )
    pin4 = Pin(
        user_id=1, title='Homemade Vegetable Potstickers or Dumplings', media_url='https://i0.wp.com/thefoodietakesflight.com/wp-content/uploads/2020/08/e345f8_1810b7177a1042cca1135e8b130069b5mv2_d_4000_6000_s_4_2.jpg?w=740&ssl=1', description='Homemade dumpling wrappers packed with a tofu and veggie filling!'
    )
    pin5 = Pin(
        user_id=2, title='Kawaii', media_url='https://i.pinimg.com/564x/ae/f8/b5/aef8b5e66f936573ac2fa507bb5f62c9.jpg', description='Cute anime girl'
    )
    pin6 = Pin(
        user_id=2, title="Do you think I'm beautiful", media_url='https://i.pinimg.com/564x/97/46/0b/97460b629e3b43e6fa1ea04fca4e1256.jpg', description=' devoted to cute little animals such as puppers, cates and turtles, and all sorts of other cute animals'
    )
    pin7 = Pin(
        user_id=2, title='She’s very photogenic', media_url='https://i.pinimg.com/564x/a3/a2/f2/a3a2f2445698c9f77c3703f04acef39e.jpg', description='Pictures, videos, articles, and questions featuring and about cats.'
    )
    pin8 = Pin(
        user_id=3, title='Colonial-Style House with Enduring Charm', media_url='https://i.pinimg.com/564x/b1/9b/37/b19b37ff8072e36b0161c8d2f1408765.jpg', description='The timeless aesthetic offers a sense of history and an elegant look that remains popular today.'
    )
    pin9 = Pin(
        user_id=3, title='Scenic freeway', media_url='https://i.pinimg.com/564x/b6/82/92/b68292df7021c6fd8e80eaf8824b8124.jpg', description='Demon Slayer Anime'
    )
    pin10 = Pin(
        user_id=3, title='Nusa Penida, Bali', media_url='https://i.pinimg.com/564x/77/ba/33/77ba33c067c7bb21eceeb6e688b43560.jpg', description='The awesome Nusa Penida in Bali. The 17 best things to do Nusa Penida island in Bali.'
    )
    pin11 = Pin(
        user_id=2, title='Italy Aesthetic', media_url='https://i.pinimg.com/750x/11/eb/1f/11eb1f6dccec417a5575ef5d9807c8dd.jpg', description='Romantic Italian is an aesthetic built upon the romanticism of the culture of Italy, particularly its idyllic countrysides, rich history, fashion culture, and languid society. '
    )
    pin12 = Pin(
        user_id=2, title='Italy Summer Aesthetics 🍇🍋🍊', media_url='https://i.pinimg.com/750x/e5/92/65/e5926545d6b629b1b14649d7fbdba912.jpg', description='Summer in Italy is georgous!'
    )
    pin13 = Pin(
        user_id=3, title='Maldives', media_url='https://i.pinimg.com/750x/c0/31/c8/c031c8995e809a28a80d2950d5527331.jpg', description='Must see Luxury Vacation ideas #luxuryvacation #dreamvacations #resortvacation #beachdestination #bucketlist #beachtrip #resorts #Maldives'
    )
    pin14 = Pin(
        user_id=2, title='Brienz Switzerland', media_url='https://i.pinimg.com/750x/54/b2/2c/54b22cd73438e4f191a82bfc32c1a05b.jpg', description='Brienz is a village located on the northeast shore of lake Brienz. With some amazing attraction it’s definitely a place to visit in Switzerland .'
    )
    pin15 = Pin(
        user_id=2, title='Corfu, Greece', media_url='https://i.pinimg.com/564x/66/30/42/66304291ba4dc98be871e572fb4a538a.jpg', description='The sound of the waves falling softly onto the sand. The ease of access to the beach, town, and solitude.'
    )
    pin16 = Pin(
        user_id=2, title='The St. Regis Bora Bora Resort', media_url='https://i.pinimg.com/564x/19/9f/39/199f39fdfa38020998dee10835b8b429.jpg', description='The St. Regis Bora Bora Resort is a luxury resort in French Polynesia, ideal for a couples retreat or honeymoon.'
    )
    pin17 = Pin(
        user_id=1, title='Suiran, a Luxury Collection Hotel, Kyoto', media_url='https://i.pinimg.com/564x/af/5a/33/af5a33cd0caaec862960469ec82d9749.jpg', description='Kyoto is one of the most favourite Japanese cities for tourists. From the iconic temples, palaces, bamboo forests, delightful gardens to the rich and the vibrant culture, Kyoto is surely going to be a highlight of your journey'
    )
    pin18 = Pin(
        user_id=3, title='Tokyo – the fun, vibrant, quirky and bustling capital of Japan', media_url='https://i.pinimg.com/564x/11/36/e4/1136e4c5b1bbca6ae5a6ab6842e3a2d0.jpg', description='Tokyo, home to around 12 million inhabitants and the country’s capital, is a popular tourist area of Japan. It is also the eastern capital of the world.'
    )
    pin19 = Pin(
        user_id=1, title='Mt. Fuji, Japan Best View', media_url='https://i.pinimg.com/564x/5c/c5/fb/5cc5fb323a168c0b05232305d0593794.jpg', description='Japan’s famous volcano! #MtFuji #Japan #volcano #Japan #Hakone'
    )
    pin20 = Pin(
        user_id=1, title='Blue Butterfly Pea Lemon Panna Cotta Cake 🎂', media_url='https://i.pinimg.com/564x/42/89/5b/42895bd204ca952a7430d500f26cb43e.jpg', description='Isn\'t it incredible how something as simple as a color can change your whole perception of a cake?'
        
    )
    pin21 = Pin(
        user_id=1, title='Hong Kong Disneyland\'s New Castle', media_url='https://i.pinimg.com/564x/1a/5a/7d/1a5a7d5f9be1357340f6cfd1b6350d83.jpg', description='The Castle of Magical Dreams is open at Hong Kong Disneyland! It represents 13 different Disney Princesses.'
    )
    
    pin22 = Pin(
        user_id=1, title='The Art of Food Plating', media_url='https://i.pinimg.com/564x/23/86/94/23869409fa547c0ee694462b1f4920a1.jpg', description='There is nothing more appealing to me than a well composed plate of food'
    )
    pin23 = Pin(
        user_id=1, title='This is Chengdu, the city that makes life tasty', media_url='https://i.pinimg.com/750x/5a/d2/ca/5ad2cae4ae66eda69f95f54508cee794.jpg', description='This dynamic city also serves as a great jumping-off point for day trips and explorations of the surrounding countryside #travel #chengdu #sichuan #china #food #history'
    )
    pin24 = Pin(
        user_id=3, title='Positano, Italy', media_url='https://i.pinimg.com/564x/8b/08/42/8b084269a4a81827c1e0c3e66ca88d8d.jpg', description='wow... #positano #italy #vacation #almalficoast #sunset #luxurioustravel'
    )
    pin25 = Pin(
        user_id=1, title='Set Your Sights on the Northern Lights', media_url='https://i.pinimg.com/564x/c0/81/15/c081156e5df20eac7661c9446b551bed.jpg', description='Travel under the twilight skies of Norway to bask in the wondrous snow-dusted glow of the aurora borealis.'
    )
    pin26 = Pin(
        user_id=1, title='HuangLongXi Ancient Town(Chengdu, China)', media_url='https://i.pinimg.com/564x/69/45/7e/69457efd2909e350b8bf8e31548de547.jpg', description='Huanglongxi Ancient Town is one of the top ten ancient towns in China, located ~50 km south from Chengdu. It has a history of over 1700 years '
    )
    pin27 = Pin(
        user_id=1, title='Easy Homemade Chicken Ramen Recipe', media_url='https://i.pinimg.com/564x/92/71/f4/9271f402cf1dc8d31fbeaa0f3c17b9a9.jpg', description='Easy Homemade Chicken Ramen Recipe'
    )
    pin28 = Pin(
        user_id=1, title='Hong Kong skyline', media_url='https://i.pinimg.com/564x/3e/dc/d1/3edcd136c8b4dbb7d0243cd870b24b05.jpg', description='From a stunning skyline to surprising and gorgeous natural scenery'
    )
    pin29 = Pin(
        user_id=3, title='LeBron x Nike LA Lakers Basketball Planter - Plastic Ball Stand', media_url='https://i.pinimg.com/564x/a7/c4/61/a7c4618aaf68c0dad2ad20e0aa4e2e44.jpg', description='Custom LeBron x Nike LA Lakers Basketball Planter 🔥'
    )
    pin30 = Pin(
        user_id=3, title='Smurf', media_url='https://i.pinimg.com/750x/df/e8/4f/dfe84f2f7299fe2a2da0f950e309f587.jpg', description='🦋'
    )
    pin31 = Pin(
        user_id=3, title='Goat', media_url='https://i.pinimg.com/564x/21/62/13/216213bfe868734d02f7638f0c239379.jpg', description='#Tom #12 #Patriots #Buccaneers '
    )
    pin32 = Pin(
        user_id=3, title='Golden trio', media_url='https://i.pinimg.com/750x/80/b4/ff/80b4ffd567657372d2a231533ee9f1d9.jpg', description='bffl '
    )
    pin33 = Pin(
        user_id=1, title='Shelfie Goals & New Beauty Launches', media_url='https://i.pinimg.com/750x/b4/df/7d/b4df7d3f267b65f8a2dbae6e76ea51c6.jpg', description='#skincare #beauty'
    )
    pin34 = Pin(
        user_id=2, title='Beauty products I’m currently testing ✨', media_url='https://i.pinimg.com/750x/84/5d/24/845d2461c6149f858927f6b61ce00b4c.jpg', description='#skincare #beauty'
    )
    pin35 = Pin(
        user_id=2, title='Raccoon Pumpkin Carving', media_url='https://i.pinimg.com/564x/b0/7d/9f/b07d9f5462da7a7043a2007cfb031b7b.jpg', description='#halloween #pumpkin #raccoon'
    )
    pin36 = Pin(
        user_id=1, title='Christmas Living Room Ideas', media_url='https://i.pinimg.com/564x/d7/d9/3f/d7d93f226054491b1ae4d3b015b3d26b.jpg', description='These Christmas decorating ideas will have your living room overflowing with cheer'
    )
    pin37 = Pin(
        user_id=1, title='Iphone Wallpaper', media_url='https://i.pinimg.com/750x/96/5b/90/965b9050baa65c8fe5f694bb73e0e015.jpg', description='#galaxy #purple #wallpaper.'
    )
    pin38 = Pin(
        user_id=1, title='childhood piano', media_url='https://i.pinimg.com/564x/4c/41/6d/4c416dd9acd7368c092bf2072ff6ff52.jpg', description='I saved a lot of money by repairing and painting my childhood piano instead of buying a new one.'
    )
    pin39 = Pin(
        user_id=1, title='- your past self is proud!', media_url='https://i.pinimg.com/750x/82/60/04/826004bf23376637ae20d3c0c62e2600.jpg', description='Give yourself a pat on the back'
    )
    pin40 = Pin(
        user_id=1, title='Thai Red Curry Noodle Soup', media_url='https://s23209.pcdn.co/wp-content/uploads/2018/04/Thai-Red-Curry-Noodle-SoupIMG_4787.jpg', description='Craving red curry? This Asian-inspired dish is what you need! Packed with tender bites of chicken and the perfect amount of spice.'
    )
    pin40 = Pin(
        user_id=1, title='Modern Interior Design', media_url='https://i.pinimg.com/236x/94/39/9d/94399ddd58a2a693925df1f419153aec.jpg', description='modern home decor #style #interiordesign'
    )
    pin41 = Pin(
        user_id=3, title='Interior Design', media_url='https://i.pinimg.com/564x/af/f4/99/aff49948d5736c13455263a55e99fd6d.jpg', description='modern home decor #style #interiordesign'
    )
    pin42 = Pin(
        user_id=2, title='Blue nails Inspo 🦕☁️', media_url='https://i.pinimg.com/750x/b4/01/58/b40158e7afd6ca7f374ec828c2e1a6bd.jpg', description='My favorite color is blue'
    )
    pin43 = Pin(
        user_id=1, title='Prom Hair', media_url='https://i.pinimg.com/750x/e1/60/65/e160655edf1ec1f451ffc689fa4e267f.jpg', description='prom hair'
    )
    pin43 = Pin(
        user_id=1, title='Women Autumn Long Sleeve Plaid Shirt Blouse', media_url='https://i.pinimg.com/236x/f0/4a/cb/f04acbc326660eba2585d403b7a0a0dd.jpg', description='stylish, intricate, and simple styles'
    )
    pin43 = Pin(
        user_id=2, title='Women Autumn Long Sleeve Plaid Shirt Blouse', media_url='https://i.pinimg.com/236x/e1/d4/30/e1d4301fd1a8b287ad0d74db68ddfa80.jpg', description='gaming setup/room'
    )
    pin44 = Pin(
        user_id=2, title='New White house design experience ideas', media_url='https://i.pinimg.com/750x/65/c1/cb/65c1cb319f2f53e7d505cff85ee34c00.jpg', description='#white #simple #clean'
    )
    pin45 = Pin(
        user_id=2, title='Blue + Green Pumpkin Tablescape - Designed Simple', media_url='https://i.pinimg.com/564x/c9/33/43/c93343becba5a5c4c3beb96640af03c6.jpg', description='Blue + Green Pumpkin Fall Tablescape'
    )
    pin45 = Pin(
        user_id=3, title='Kilchurn Castle Scotland Wooden Jigsaw Puzzle', media_url='https://i.pinimg.com/564x/e1/0d/60/e10d60878d4acaf48c9ad9656b02d62c.jpg', description='Summer fades; autumn winds commence their dance. The solitary nature of impending darkness encroaches, yet warm familiarity is plenteous.'
    )
    pin46 = Pin(
        user_id=1, title='This is still by far the best sunset I\'ve ever seen. Lavender fields of Hokkaido, Japan', media_url='https://i.pinimg.com/564x/75/93/e8/7593e86de2926ed65d0630c988172817.jpg', description='Finding beauty in the the world around us, from the simple and ordinary to the majestic and awe-inspiring.'
    )
    pin47 = Pin(
        user_id=3, title='Mango Salsa Chicken', media_url='https://i.pinimg.com/564x/34/29/7f/34297f40352d9bab9f7d7e0e906c7c12.jpg', description='Easy, healthy and bursting with flavor with just a few simple ingredients, this Mango Salsa Chicken will be your go-to for busy nights!'
    )
    pin48 = Pin(
        user_id=3, title='Caramel Brownie', media_url='https://i.pinimg.com/564x/15/15/bf/1515bf875cb42ecf1eb0cfa7d50812c7.jpg', description='65 minutes · Vegetarian · Serves 12This intensely luxurious brownie bottom ice cream cake recipe is not only INSANELY easy to make but it\'s seriously showstopping too!'
    )
    pin49 = Pin(
        user_id=3, title='How to make a Cosmopolitan', media_url='https://i.pinimg.com/564x/43/23/2f/43232fe3429e0ec8e8f616b0f4ea06e3.jpg', description='#basic'
    )
    pin50 = Pin(
        user_id=2, title='Healthy Drinks', media_url='https://i.pinimg.com/750x/d5/5d/fc/d55dfc25528df2d68e3d7bd05967a4c5.jpg', description='#basic'
    )
    pin51 = Pin(
        user_id=1, title='Frozen Blackberry Coolers', media_url='https://i.pinimg.com/564x/ef/07/a7/ef07a7b528303d2b036dd53872bd2a3a.jpg', description='Frozen Blackberry Cooler Recipe - SO refreshing!'
    )
    pin52 = Pin(
         user_id=1, title='Beautiful places to visit in Japan', media_url='https://i.pinimg.com/564x/a0/85/e0/a085e0a4cbdaa6da03457cefec413659.jpg', description='Beautiful, mystical and extraordinary in equal measures Japan, usually known for industrialization, is also home to historic shrines, temples, architecture, world-class restaurants, imperial palaces and natural wonders in the world.'
    )
    pin53 = Pin(
         user_id=1, title='Bangin Blueberry Lemonade', media_url='https://i.pinimg.com/564x/32/29/f1/3229f13f13045b1e738f95edc79e616e.jpg', description='Bangin\' Blueberry Lemonade!'
    )
    pin54 = Pin(
         user_id=1, title='I Photograph The Roads Of Transylvania From Above. Yes, That Transylvania!', media_url='https://i.pinimg.com/564x/5c/7b/1c/5c7b1c0d2f305be64e8f9549838fcc0f.jpg', description='I\'m a photographer living in Romania, in Eastern Europe.'
    )
    pin55 = Pin(
         user_id=1, title='San Francisco Oakland Bay Bridge', media_url='https://i.pinimg.com/564x/5a/03/ff/5a03ff6ad1d804689aa3fd497177e3a5.jpg', description='San Francisco Oakland Bay Bridge Vintage'
    )
    pin56 = Pin(
         user_id=3, title='burger', media_url='https://i.pinimg.com/750x/a1/1f/a0/a11fa03dc7475ef6f3b1c0057637e60c.jpg', description='yum'
    )
    pin57 = Pin(
         user_id=2, title='Chicken Street Tacos', media_url='https://i.pinimg.com/750x/55/97/7e/55977eda407393ad2ca0a7f639acc8cf.jpg', description='Real food recipe for real people'
    )
    pin57 = Pin(
         user_id=2, title='Things to do in Key West', media_url='https://i.pinimg.com/750x/d0/68/d6/d068d6d4c969c6df06fc125876e980dd.jpg', description='Key West is absolutely beautiful! There’s so much to do and the water is bright blue.'
    )
    pin58 = Pin(
         user_id=2, title='Romantic Honeymoon in Maldives', media_url='https://i.pinimg.com/750x/c8/5b/79/c85b79a7cfd9a7d8068f8e7902ea86d0.jpg', description='In here, you can find your dream destinations.'
    )
    pin59 = Pin(
        user_id=1, title='Rainbow Sangria', media_url='https://i.pinimg.com/564x/75/7c/28/757c28f34a2e1dc2ef35f79f2d6361b4.jpg', description='This simple rainbow sangria tastes just as beautiful as it looks!'
    )
    pin60 = Pin(
        user_id=1, title='Universal Orlando {Wizarding World of Harry Potter}', media_url='https://i.pinimg.com/564x/d7/b9/2e/d7b92e8fca6291d9acaa982f9b7a989d.jpg', description='Is butterbeer worth the legendary wait?'
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
    db.session.add(pin11)
    db.session.add(pin12)
    db.session.add(pin13)
    db.session.add(pin14)
    db.session.add(pin15)
    db.session.add(pin16)
    db.session.add(pin17)
    db.session.add(pin18)
    db.session.add(pin19)
    db.session.add(pin20)
    db.session.add(pin21)
    db.session.add(pin22)
    db.session.add(pin23)
    db.session.add(pin24)
    db.session.add(pin25)
    db.session.add(pin26)
    db.session.add(pin27)
    db.session.add(pin28)
    db.session.add(pin29)
    db.session.add(pin30)
    db.session.add(pin31)
    db.session.add(pin32)
    db.session.add(pin33)
    db.session.add(pin34)
    db.session.add(pin35)
    db.session.add(pin36)
    db.session.add(pin37)
    db.session.add(pin38)
    db.session.add(pin39)
    db.session.add(pin40)
    db.session.add(pin41)
    db.session.add(pin42)
    db.session.add(pin43)
    db.session.add(pin44)
    db.session.add(pin45)
    db.session.add(pin47)
    db.session.add(pin48)
    db.session.add(pin49)
    db.session.add(pin50)
    db.session.add(pin51)
    db.session.add(pin52)
    db.session.add(pin53)
    db.session.add(pin54)
    db.session.add(pin55)
    db.session.add(pin56)
    db.session.add(pin57)
    db.session.add(pin58)
    db.session.add(pin59)
    db.session.add(pin60)
    db.session.commit()



def undo_pins():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
