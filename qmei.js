// ==UserScript==
// @name         q!mei
// @namespace    https://github.com/mei-iirose/qbot/blob/master/qmei.js
// @version      1.1
// @description  mei is a cyborg!
// @author       mei.iirose@pm.me
// @include      https://iirose.com/messages.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var meiBotData=JSON.parse(localStorage.getItem('meiBotData') || '{}');
    const JOIN_MESSAGE = `(= =) じーーーー`;
    const COME_BACK_MESSAGE = `come back!`;
    const MATCH_RULES = [
        MatchRule({
            begin_with_keyword: ['hello', 'hi', 'Hello', 'Hi', 'hey', 'Hey', 'heyo', 'Heyo', 'Hello!', 'hello!'],
            reply_to_user: {
                '花Q': 'mei\'s brain feels glitchy',
                'Ruby': 'Rubeh Rubeh Rubeh!',
                'Cargo': 'box!',
                'Aluin': 'shut up bully',
                'Doll': 'Doll is a mean friend'
            },
            default_reply: null
        }),

        MatchRule({
            begin_with_keyword: myself + ' &lt; ',
            end_with_keyword: ['poke', 'pokes', '*poke*', '*pokes*', 'Poke', '*Poke*', 'Pokes', '*Pokes*'],
            reply_to_user: {
                '1%': 'rebooting...',
                'Cargo': 'nuuu',
            },
            default_reply: 'mei will bite you!'
        }),


        MatchRule({
            end_with_keyword: 'bye',
            default_reply: null
        }),
        MatchRule({
            end_with_keyword: 'toast',
            default_reply: function() {inputKeyDown(moveinput,'<> ' + 'https://www.youtube.com/watch?v=RAninNKS2a8')}
        }),
        MatchRule({
            end_with_keyword: ['yanderemode', 'yandere mode', 'Yandere Mode', 'Yandere mode'],
            default_reply: 'will not steal mei\'s senpai'
        }),
        //this is working, media player provided by site
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: 'radio',
            default_reply: function() {inputKeyDown(moveinput,'<> ' + '\http://touhouradio.com:8000/.mp3')}
        }),
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: ['Nier', 'nier'],
            default_reply: function () {var urls =
                ['https://www.youtube.com/watch?v=xRHsEWIC8PI',
                 'https://www.youtube.com/watch?v=FpjTILokyKM',
                 'https://www.youtube.com/watch?v=oQT_LwV2qwM',
                 'https://www.youtube.com/watch?v=FMBScNW_CNc',
                 'https://www.youtube.com/watch?v=ppIvG6PBmCI',
                 'https://www.youtube.com/watch?v=ZW_zO1ox8XE',
                 'https://www.youtube.com/watch?v=Tx0U9UsUgpI',
                 'https://www.youtube.com/watch?v=OUpGltfOU10',
                 'https://www.youtube.com/watch?v=T08xuOatEZk',
                 'https://www.youtube.com/watch?v=dXmRPWXIvag',
                 'https://www.youtube.com/watch?v=5SW1Zy6-EDw',
                 'https://www.youtube.com/watch?v=k_YDwZ-9gaA',
                 'https://www.youtube.com/watch?v=j4n5sx6qUVc',
                 'https://www.youtube.com/watch?v=jjDO91gNiCU',
                 'https://www.youtube.com/watch?v=YMKskuvJTcs',
                 'https://www.youtube.com/watch?v=UZi0Qyjvyw8',
                 'https://www.youtube.com/watch?v=tGFOvuOxwuU',
                 'https://www.youtube.com/watch?v=M06yl1wupn8',
                 'https://www.youtube.com/watch?v=10A5egJh6OQ',
                 'https://www.youtube.com/watch?v=1or6ny00BAY',
                 'https://www.youtube.com/watch?v=p93KTqknXig',
                 'https://www.youtube.com/watch?v=uGR5eklLV88',
                 'https://www.youtube.com/watch?v=uUmktoDFFKM',
                 'https://www.youtube.com/watch?v=_6EwwGwmfM0',
                 'https://www.youtube.com/watch?v=b4qEh8agDwI',
                 'https://www.youtube.com/watch?v=tEpuIrGFj-M',
                 'https://www.youtube.com/watch?v=VPXuopwIdBo',
                 'https://www.youtube.com/watch?v=3ruk7G3r14I',
                 'https://www.youtube.com/watch?v=z49X4rpxdQE',
                 'https://www.youtube.com/watch?v=_Wi5KenZI9I',
                 'https://www.youtube.com/watch?v=l1RM8ECQe5g',
                 'https://www.youtube.com/watch?v=Vf-GY3ezkHU',
                 'https://www.youtube.com/watch?v=ihV2388iAp0',
                 'https://www.youtube.com/watch?v=rQuHwqMcN8w',
                 'https://www.youtube.com/watch?v=9y8GLHLOCbk',
                 'https://www.youtube.com/watch?v=mFhM1ayTsqE',
                 'https://www.youtube.com/watch?v=Hsp5Zqqf4PI',
                 'https://www.youtube.com/watch?v=k5Figo-QTW0',
                 'https://www.youtube.com/watch?v=3QbkjyuO6l4',
                 'https://www.youtube.com/watch?v=t7wJYftFRbY',
                 'https://www.youtube.com/watch?v=Hc0U4Ik1yN4',
                 'https://www.youtube.com/watch?v=vK67sHPC4mM',
                 'https://www.youtube.com/watch?v=ePKjkPl8jJs',
                 'https://www.youtube.com/watch?v=s7sX41zOqAY',
                 'https://www.youtube.com/watch?v=CKOM3lNFajE',
                 'https://www.youtube.com/watch?v=anXUayBofPA',
                 'https://www.youtube.com/watch?v=z5YChAFjxks',
                 'https://www.youtube.com/watch?v=ntHbvoYr1Lk',
                 'https://www.youtube.com/watch?v=7I2kb9nB-RE',
                 'https://www.youtube.com/watch?v=0bJznex0eYQ',
                 'https://www.youtube.com/watch?v=ubMf__iB8iI',
                 'https://www.youtube.com/watch?v=AzdNqDHpNWo',
                 'https://www.youtube.com/watch?v=52O7YWYGIEU',
                 'https://www.youtube.com/watch?v=bT4SviJIB98',
                 'https://www.youtube.com/watch?v=f5izHod68uI',
                 'https://www.youtube.com/watch?v=ZNJ6LO1QIyk',
                 'https://www.youtube.com/watch?v=LYc3z9H8OFM',
                 'https://www.youtube.com/watch?v=F9B1RF3n7XA',
                 'https://www.youtube.com/watch?v=Ne1HcEU7sho',
                 'https://www.youtube.com/watch?v=xcSSsa6AE2M',
                 'https://www.youtube.com/watch?v=SGUeKCA5p1A',
                 'https://www.youtube.com/watch?v=wn_janwmzRU',
                 'https://www.youtube.com/watch?v=OwBh_7zV4Wo',
                 'https://www.youtube.com/watch?v=lhtYq3gBHmI',
                 'https://www.youtube.com/watch?v=APfedkre9Rg',
                 'https://www.youtube.com/watch?v=TiFDKDczykM',
                 'https://www.youtube.com/watch?v=R_NvlZu5v-Y',
                 'https://www.youtube.com/watch?v=A9TKBjsut0s',
                 'https://www.youtube.com/watch?v=XA7OcgaYBW4',
                 'https://www.youtube.com/watch?v=gv7SWWYmQFU',
                 'https://www.youtube.com/watch?v=kQrgqcqAllw',
                 'https://www.youtube.com/watch?v=ft0J9YhXUNk',
                 'https://www.youtube.com/watch?v=mtTVtJevr3E',
                 'https://www.youtube.com/watch?v=CGu0i8xGjA8',
                 'https://www.youtube.com/watch?v=6feWpInlH1A',
                 'https://www.youtube.com/watch?v=5XoTXjxgu0U',
                 'https://www.youtube.com/watch?v=hi5hkVlWerQ',
                 'https://www.youtube.com/watch?v=bw2U_0fIfNo',
                 'https://www.youtube.com/watch?v=7n9aWlxVU8s',
                 'https://www.youtube.com/watch?v=DLAvHLQGOco'];
                                        inputKeyDown(moveinput,'<> '+urls[RandomInt(urls.length)]);
                                       }
        }),
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: ['porter', 'porter robinson', 'Porter Robinson', 'Porter robinson', 'porter Robinson', 'PORTER ROBINSON'],
            default_reply: function () {var urls =
                [`https://www.youtube.com/watch?v=JbrIpDlc9Ps`,
                 `https://www.youtube.com/watch?v=W2TE0DjdNqI`,
                 `https://www.youtube.com/watch?v=HAIDqt2aUek`,
                 `https://www.youtube.com/watch?v=si81bIoZRJQ`,
                 `https://www.youtube.com/watch?v=D1sZ_vwqwcE`,
                 `https://www.youtube.com/watch?v=hgKDu5pp_fU`,
                 `https://www.youtube.com/watch?v=5S21AIWMLbw`,
                 `https://www.youtube.com/watch?v=5LILChvqUo4`,
                 `https://www.youtube.com/watch?v=Ardc3nrQMxw`,
                 `https://www.youtube.com/watch?v=lSooYPG-5Rg`,
                 `https://www.youtube.com/watch?v=d1ZhnSNN8UI`,
                 `https://www.youtube.com/watch?v=l2YIZOE2GjQ`,
                 `https://www.youtube.com/watch?v=Vsy1URDYK88`,
                 `https://www.youtube.com/watch?v=Coxn8L28pwk`,
                 `https://www.youtube.com/watch?v=capV8asfWnc`,
                 `https://www.youtube.com/watch?v=34thwBLMe4g`,
                 `https://www.youtube.com/watch?v=Y_J3WWYp8Gc`,
                 `https://www.youtube.com/watch?v=az-sQd9dP74`,
                 `https://www.youtube.com/watch?v=sa42AW__3F0`,
                 `https://www.youtube.com/watch?v=af1hIoGLRWQ`,
                 `https://www.youtube.com/watch?v=n4_-YldDHJU`,
                 `https://www.youtube.com/watch?v=T16crBGDFAA`,
                 `https://www.youtube.com/watch?v=-6I10SEJF6c`,
                 `https://www.youtube.com/watch?v=h2NJzT-19lE`,
                 `https://www.youtube.com/watch?v=Ggu_PdWTK3Q`,
                 `https://www.youtube.com/watch?v=26RmRa83v40`,
                 `https://www.youtube.com/watch?v=0VsQ1x6VJPw`];
                                        inputKeyDown(moveinput,'<> '+urls[RandomInt(urls.length)]);
                                       }
        }),
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: ['flcl', 'FLCL', 'FlCl'],
            default_reply: function () {var urls =
                [`https://www.youtube.com/watch?v=qAE8c7NcO7Q`,
                 `https://www.youtube.com/watch?v=GYIFgEZVvdo`,
                 `https://www.youtube.com/watch?v=xsRdwvAtqfY`,
                 `https://www.youtube.com/watch?v=W6wYoF6CV28`,
                 `https://www.youtube.com/watch?v=cFZYk0s1dVE`,
                 `https://www.youtube.com/watch?v=US4CBj91xXg`,
                 `https://www.youtube.com/watch?v=P0slx0QHuxY`,
                 `https://www.youtube.com/watch?v=4caoHtD0PD4`,
                 `https://www.youtube.com/watch?v=bPI-1wAsXe0`,
                 `https://www.youtube.com/watch?v=0OwrAkM7xKA`,
                 `https://www.youtube.com/watch?v=J26arrzS5co`,
                 `https://www.youtube.com/watch?v=V89yXyYmK3k`,
                 `https://www.youtube.com/watch?v=GmbCjmiCKNU`,
                 `https://www.youtube.com/watch?v=pQ6aR68mqSs`,
                 `https://www.youtube.com/watch?v=XnM8lsrYJq0`,
                 `https://www.youtube.com/watch?v=hJChPwAjiiU`,
                 `https://www.youtube.com/watch?v=JjJILOP6VF4`,
                 `https://www.youtube.com/watch?v=7I959TtPFH4`,
                 `https://www.youtube.com/watch?v=oeP9-gEp2kI`,
                 `https://www.youtube.com/watch?v=ILGu9T8M4jY`,
                 `https://www.youtube.com/watch?v=J3WOTh7JC70`,
                 `https://www.youtube.com/watch?v=Hb96-LJnUoY`,
                 `https://www.youtube.com/watch?v=5VVKQrA56jk`,
                 `https://www.youtube.com/watch?v=y0RRFy68mpA`,
                 `https://www.youtube.com/watch?v=wReHg0kKgDA`,
                 `https://www.youtube.com/watch?v=jowqYylI5DU`,
                 `https://www.youtube.com/watch?v=yhaiM_UKspc`,
                 `https://www.youtube.com/watch?v=1g_1k_l1AiM`,
                 `https://www.youtube.com/watch?v=EdUQq67p4FU`,
                 `https://www.youtube.com/watch?v=wBKNm6zW9Aw`,
                 `https://www.youtube.com/watch?v=QbTqg2RxX6Q`,
                 `https://www.youtube.com/watch?v=CPShdQhc27E`,
                 `https://www.youtube.com/watch?v=k56d-0Fi3yc`,
                 `https://www.youtube.com/watch?v=c4LWtr90l0A`];
                                        inputKeyDown(moveinput,'<> '+urls[RandomInt(urls.length)]);
                                       }
        }),

        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: ['Eureka', 'eureka'],
            default_reply: function () {var urls =
                [`https://www.youtube.com/watch?v=7B-D2qXm0cw&list=PLTr2-MANaK5ru7QZqXoLk01YrWr-Svu_-&index=1`,
                 `https://www.youtube.com/watch?v=zKKxABS_L_k&list=PLTr2-MANaK5ru7QZqXoLk01YrWr-Svu_-&index=2`,
                 `https://www.youtube.com/watch?v=jjbl2eTkfPw&list=PLTr2-MANaK5ru7QZqXoLk01YrWr-Svu_-&index=3`,
                 `https://www.youtube.com/watch?v=qVYWp1d9Rpc&list=PLTr2-MANaK5ru7QZqXoLk01YrWr-Svu_-&index=4`,
                 `https://www.youtube.com/watch?v=a1BeoFuSQus&list=PLTr2-MANaK5ru7QZqXoLk01YrWr-Svu_-&index=5`,
                 `https://www.youtube.com/watch?v=Locap98B6-U&list=PLTr2-MANaK5ru7QZqXoLk01YrWr-Svu_-&index=6`,
                 `https://www.youtube.com/watch?v=artn9fErRp8&list=PLTr2-MANaK5ru7QZqXoLk01YrWr-Svu_-&index=7`,
                 `https://www.youtube.com/watch?v=aVyvRLrK0ss&list=PLTr2-MANaK5ru7QZqXoLk01YrWr-Svu_-&index=8`,
                 `https://www.youtube.com/watch?v=9yedhaQLJ30&list=PLTr2-MANaK5ru7QZqXoLk01YrWr-Svu_-&index=9`,
                 `https://www.youtube.com/watch?v=LzMMYKch2u8&list=PLTr2-MANaK5ru7QZqXoLk01YrWr-Svu_-&index=10`,
                 `https://www.youtube.com/watch?v=qTfk_wEdZLE&list=PLTr2-MANaK5ru7QZqXoLk01YrWr-Svu_-&index=11`,
                 `https://www.youtube.com/watch?v=auCPYk60rjk&list=PLTr2-MANaK5ru7QZqXoLk01YrWr-Svu_-&index=12`,
                 `https://www.youtube.com/watch?v=AyI5e_DCNZI&list=PLTr2-MANaK5ru7QZqXoLk01YrWr-Svu_-&index=13`,
                 `https://www.youtube.com/watch?v=ROF0fb3jgrY&list=PLTr2-MANaK5ru7QZqXoLk01YrWr-Svu_-&index=14`];
                                        inputKeyDown(moveinput,'<> '+urls[RandomInt(urls.length)]);
                                       }
        }),

        //fetches hourly weather info for okc from noaa
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: 'weather',
            default_reply: ['http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCHWROKC.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCHWRLTS.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCHWRADM.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCHWRAQR.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCHWRCHK.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCHWRCSM.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCHWREND.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCHWRLAW.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCHWRPNC.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCHWRSWO.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCHWRSRE.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCHWRWWR.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCHWRSPS.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCHWOOUN.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCSAFOKC.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCSAFLTS.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCSAFADM.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCSAFAQR.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCSAFCHK.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCSAFCSM.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCSAFEND.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCSAFLAW.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCSAFPNC.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCSAFSWO.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCSAFSRE.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCSAFWWR.mp3', 'http://www.crh.noaa.gov/images/rtimages/oun/audio/OKCSAFSPS.mp3']
        }),
        //pairs two users in the chat
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: 'ship',
            default_reply: 'mei hasnt gotten a marriage license yet D:'
        }),
        //displays random whole number between 01 and 20
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: 'roll',
            default_reply: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
        }),
        //fetches horoscope
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: 'fortune',
            default_reply: 'zodiac not yet available >~<'
        }),
        //initiates macro to give thief 4 gold,
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: '*steals gold*',
            default_reply: 'wha?! mei had more than this a moment ago...'
        }),
        //q!colorpicker
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: 'color',
            default_reply: getRandomColor
        }),
        //q!meitime
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: 'time',
            default_reply: currentDateTime
        }),
        //cargo's command
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: 'wish',
            default_reply: 'your wish has been granted'
        }),
        //q!nuh uh cta
        MatchRule({
            include_keyword: ['yes', 'uh huh'],
            reply_to_user: {
                'C-ta': 'nuh uh',
                default_reply: null
            }
        }),
        //q!hug
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: ['hug', 'Hug', '*hug*'],
            default_reply: ['https://media1.tenor.com/images/506aa95bbb0a71351bcaa753eaa2a45c/tenor.gif?itemid=7552075', 'https://media.tenor.com/images/9f733ddf31ae241a108417bcea9a01e7/tenor.gif', 'https://media1.tenor.com/images/49a21e182fcdfb3e96cc9d9421f8ee3f/tenor.gif?itemid=3532079', 'https://i.redd.it/y5ukl117pckz.gif', 'https://media.giphy.com/media/pXQhWw2oHoPIs/giphy-downsized-large.gif']
        }),
        //q!beg
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: 'beg',
            default_reply: ['response1','response2']
        }),
        //q!dare
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: ['dare', 'dared'],
            default_reply: ['response1','response2']
        }),
        //q!slave
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: ['servant', 'maid', 'slave', 'pet'],
            default_reply: ['response1','response2']
        }),
        //q!mute, should prevent messages from sending
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: ['silence', 'mute'],
            default_reply: ['response1','response2']
        }),
        //q!command template
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: ['command1', 'command2'],
            default_reply: ['response1','response2']
        }),
        //just for lulz
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: 'pantsu',
            default_reply: ['https://i.imgur.com/PAxxtIc.png', 'https://pics.me.me/gentleman-3d-or-pervert-de-ladies-first-17892713.png']
        }),
        //if you use this mei will murder you
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: 'lewd',
            default_reply: ['http://img03.deviantart.net/5491/i/2012/319/b/7/achievement_unlocked__you_are_a_pervert_by_kitsuneyin-d5l1ica.jpg', 'http://pa1.narvii.com/5961/a6da21c2342e3acf67372b709e839fae4dbd1730_hq.gif', 'https://pics.onsizzle.com/when-vou-encounter-a-prune-faced-old-pervert-you-prune-27357788.png', 'https://i.pinimg.com/736x/7b/2b/37/7b2b3730648ae3b91700c80deff27ba7.jpg', 'http://pre09.deviantart.net/8f76/th/pre/f/2013/014/7/1/achievement_unlocked__you_are_a_pervert_by_kitsuneyin-d5rfjb6.jpg', 'https://cdn.meme.am/cache/instances/folder317/500x/66161317/yoda-pervert-you-are-burn-in-hell-you-will.jpg', '', 'https://i.imgur.com/C1nrsn7.png', 'https://i.imgur.com/WBhpRb7.png', 'https://i.imgur.com/0sX7wTI.png', 'https://i.imgur.com/E2KdG6d.png', 'https://i.imgur.com/YDVySNt.png', 'https://i.imgur.com/oTBgB0M.png', 'https://i.imgur.com/C1nrsn7.png', 'https://i.imgur.com/tCAFemv.png', 'https://i.imgur.com/Rt404tt.png', 'https://i.imgur.com/bnCmlGN.png', 'https://i.imgur.com/Ncmk49X.png', 'https://i.imgur.com/uzkEK9w.png', 'https://i.imgur.com/vjiCmKs.png', 'https://i.imgur.com/WB0Qj7Y.png', 'https://i.imgur.com/PAxxtIc.png']
        }),
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: 'help',
            default_reply: `
tag Mei or prefix q! to commands. i.e. q!roll.
Command List:
hug (hugs mei),
roll (20 sided dice),
weather (plays weather forecast, updated hourly),
ship (pairs two random users in the chat),
fortune <zodiac> i.e. q!fortune capricorn (fetches horoscope for today),
nier (plays a random song from the Nier Automata OST)
flcl (plays a random song from FlCl)
radio (post media link to Touhou Radio),
help (displays this help message)`
        }),
        //displays this source page
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: 'show your brain',
            reply_to_user: {
                'Ruby': '/https://raw.githubusercontent.com/mei-iirose/qmei/master/qmei.js',
                '花Q': '/https://raw.githubusercontent.com/mei-iirose/qmei/master/qmei.js',
                '1%': 'unauthorized',
                default_reply: 'unauthorized'
            }
        })
    ];

    getcontents = (function() {
        var baseFunc = getcontents;

        const JOINED = "'1";
        const MOVED = "'2";
        const LEFT = "'3";

        return function() {
            if(!MsgInitialize){
                arguments[0].split('<').forEach(function (msg) {
                    msg = msg.split('>');

                    var user = msg[2];
                    var msgContent = msg[3];

                    if (user === myself) {
                        var regex = /bring\sback\s+(.*)/
                        var res = regex.exec(msgContent);
                        if (res !== null) {
                            BringBack(res[1]);
                        }
                    } else if (msgContent === LEFT || msgContent.lastIndexOf(MOVED, 0) === 0) {
                        SendMessage(user + ' < ' + COME_BACK_MESSAGE);
                    } else if (msgContent === JOINED) {
                        SendMessage(user + ' < ' + JOIN_MESSAGE);
                    } else {
                        MATCH_RULES.forEach(function (matchRule) {
                            var reply = matchRule(user, msgContent);
                            if (typeof reply === 'string') {
                                SendMessage(user + ' < ' + reply);
                            }
                        });
                    }
                });
            }
            baseFunc.apply(this, arguments);
        };
    })();

    function SendMessage(message) {
        socket.send(JSON.stringify({
            m: message,
            mc: inputcolorhex
        }));
    };

    function BringBack(victim) {
        socket.send('!2' + JSON.stringify({
            c: htmlspecialchars(toLowerCase(victim)),
            c2: '19_58173ede6c2c6'
        }));
    };

    function MatchRule(rule) {
        var regex = (function () {
            var regexStr;
            var escape = function (str) {
                return str.replace(/(?=[\/\\^$*+?.()|{}[\]])/g, "\\");
            };
            var joinKeywords = function (keywords) {
                if (keywords === undefined) { return ''; }
                return '(' + (Array.isArray(keywords) ? keywords.map(escape).join('|') : escape(keywords)) + ')';
            };

            regexStr = '^' + joinKeywords(rule.begin_with_keyword) +
                '.*' + joinKeywords(rule.include_keyword) +
                '.*' + joinKeywords(rule.end_with_keyword) + '$';

            return new RegExp(regexStr);
        })();

        var getReplyMessage = function (user, message, replyData) {
            switch (typeof replyData) {
                case 'string':
                    return replyData;
                case 'function':
                    return replyData(user, message);
                default:
                    return replyData[RandomInt(replyData.length)];
            }
        };
        var getReply = function (user, message) {
            if (rule.hasOwnProperty('reply_to_user')
                && rule.reply_to_user.hasOwnProperty(user)) {
                return getReplyMessage(user, message, rule.reply_to_user[user]);
            } else if (rule.hasOwnProperty('default_reply')) {
                return getReplyMessage(user, message, rule.default_reply);
            }
        };

        return function (user, message) {
            if (regex.test(message)) {
                return getReply(user, message);
            }
        };
    }

    function RandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function currentDateTime() {
        var currentdate = new Date();
        var datetime = "Mei's Clock: " + currentdate.getDate() + "/"
        + (currentdate.getMonth()+1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
        return datetime;
    }
    function saveData(key,value){
        meiBotData.key=value;
        localStorage.setItem('meiBotData',JSON.stringify(meiBotData));
    }
    function getData(key){
        return meiBotData.key;
    }
})();
