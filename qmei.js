// ==UserScript==
// @name         q!mei
// @namespace    https://github.com/mei-iirose/qbot/blob/master/qmei.js
// @version      2.0
// @description  mei is a cyborg!
// @author       mei.iirose@pm.me
// @include      https://iirose.com/messages.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var meiBotData=JSON.parse(localStorage.getItem('meiBotData') || '{}');
    const JOIN_MESSAGE = `(= =) ã˜ãƒ¼ãƒ¼ãƒ¼ãƒ¼`;
    const COME_BACK_MESSAGE = `come back!`;
    const MATCH_RULES = [
        MatchRule({
            begin_with_keyword: ['hello', 'hi', 'Hello', 'Hi', 'hey', 'Hey', 'heyo', 'Heyo', 'Hello!', 'hello!'],
            reply_to_user: {
                'èŠ±Q': 'mei\'s brain feels glitchy',
                'Ruby': 'Rubeh Rubeh Rubeh!',
                'Cargo': 'box!',
                'Aluin': 'shut up bully',
                'Doll': 'Doll is a mean friend'
            },
            default_reply: null
        }),

        MatchRule({
            begin_with_keyword: myself + ' &lt; ',
            end_with_keyword: ['poke', 'pokes', '*poke*', '*pokes*', 'Poke', '*Poke*', 'Pokes', '*Pokes*', '*Steal the carrot from mei*'],
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
        MatchRule({
            end_with_keyword: ['bite mei', 'bit mei', 'bites you', 'bite you', 'bites mei', 'Bite you', 'Bites Mei'],
            default_reply: 'mei will poke your eye with a carrot!'
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
            include_keyword: ['Xefox', 'xefox'],
            default_reply: function () {var urls =
                ['https://www.youtube.com/watch?v=PV8vK2VdmpU',
                 'https://www.youtube.com/watch?v=Ik7VvFDs9pw',
                 'https://www.youtube.com/watch?v=Cd9hekSTYAE',
                 'https://www.youtube.com/watch?v=_0kAYDIyIyo',
                 'https://www.youtube.com/watch?v=vu7YJGiiZX4',
                 'https://www.youtube.com/watch?v=vZJyt3q9fXY',
                 'https://www.youtube.com/watch?v=FI7KIlLM6Ho',
                 'https://www.youtube.com/watch?v=IR0y65bcbZY',
                 'https://www.youtube.com/watch?v=5Z0roM2oHmQ',
                 'https://www.youtube.com/watch?v=qbB_owuShfA',
                 'https://www.youtube.com/watch?v=ZXWY_46D-6s',
                 'https://www.youtube.com/watch?v=RPnaMoftS70',
                 'https://www.youtube.com/watch?v=HwkrAOAScnk',
                 'https://www.youtube.com/watch?v=ZrLef3xMY3o',
                 'https://www.youtube.com/watch?v=okubUk0-qKU',
                 'https://www.youtube.com/watch?v=emYAAYT6KHc',
                 'https://www.youtube.com/watch?v=2ZKerYWBuRI',
                 'https://www.youtube.com/watch?v=F0u90QZLjl8',
                 'https://www.youtube.com/watch?v=5mD7iGIv_a4',
                 'https://www.youtube.com/watch?v=bybfEqBgL2Q',
                 'https://www.youtube.com/watch?v=v8kTInuEK4M',
                 'https://www.youtube.com/watch?v=-ZO1sL1-s6E',
                 'https://www.youtube.com/watch?v=yzIEtSbuHj8',
                 'https://www.youtube.com/watch?v=gf1VGEDROyY',
                 'https://www.youtube.com/watch?v=Wi4mxG1RoOI',
                 'https://www.youtube.com/watch?v=Hv67s7gWrXs',
                 'https://www.youtube.com/watch?v=X8NjsiEpdME',
                 'https://www.youtube.com/watch?v=kfFfxJrKhLw',
                 'https://www.youtube.com/watch?v=1cL8VPI4oOI'];
                                        inputKeyDown(moveinput,'<> '+urls[RandomInt(urls.length)]);
                                       }
        }),

        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: ['ghibli', 'Ghibli'],
            default_reply: function() {var urls =
                ['https://www.youtube.com/watch?v=rZUppxT38Zk',
                 'https://www.youtube.com/watch?v=k7PQgfOhxmI',
                 'https://www.youtube.com/watch?v=6ibj6Q0YQ20',
                 'https://www.youtube.com/watch?v=E1lbZw856gI',
                 'https://www.youtube.com/watch?v=YTDG3Pa8Egw',
                 'https://www.youtube.com/watch?v=rr8GurL8W_4',
                 'https://www.youtube.com/watch?v=nBADF1LdP3g',
                 'https://www.youtube.com/watch?v=OJ5kSCYE1Rc',
                 'https://www.youtube.com/watch?v=owddukdxFv4',
                 'https://www.youtube.com/watch?v=QTMjtEcQHls',
                 'https://www.youtube.com/watch?v=MZgBjQFMPvk',
                 'https://www.youtube.com/watch?v=5dv_iIuFJtA',
                 'https://www.youtube.com/watch?v=vD1yAEWpzeQ',
                 'https://www.youtube.com/watch?v=xAyS2yTua0w',
                 'https://www.youtube.com/watch?v=-umP_1oBNSk',
                 'https://www.youtube.com/watch?v=RpxXeNakyfY',
                 'https://www.youtube.com/watch?v=jH1QrYzMeIw',
                 'https://www.youtube.com/watch?v=scUyXaWMyAk',
                 'https://www.youtube.com/watch?v=47REH5rgSpw',
                 'https://www.youtube.com/watch?v=ZpENe4GOMAw',
                 'https://www.youtube.com/watch?v=mo2BJ2lqdfI',
                 'https://www.youtube.com/watch?v=TOc_hk0OMQU',
                 'https://www.youtube.com/watch?v=A4ASDIs6JD8',
                 'https://www.youtube.com/watch?v=TmjjHbUb4jc'];
                                       inputKeyDown(moveinput, '<> '+urls[RandomInt(urls.length)]);
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
            include_keyword: ['Soul', 'soul'],
            default_reply: function () {var urls =
                ['https://www.youtube.com/watch?v=ebb5AinKxWI',
                 'https://www.youtube.com/watch?v=WnUR3be5Ebk',
                 'https://www.youtube.com/watch?v=dVUmSgzgOqs',
                 'https://www.youtube.com/watch?v=UWAbdiiAOZA',
                 'https://www.youtube.com/watch?v=tGHTOVw6F4Q',
                 'https://www.youtube.com/watch?v=lVacSI9wTbY',
                 'https://www.youtube.com/watch?v=hG4lT4fxj8M',
                 'https://www.youtube.com/watch?v=p9sUkJry_XA',
                 'https://www.youtube.com/watch?v=Q2WcdaF8uL8',
                 'https://www.youtube.com/watch?v=FBfGFGTsKZw',
                 'https://www.youtube.com/watch?v=9wRBKCeHn4g',
                 'https://www.youtube.com/watch?v=fwC30E1IVKQ'];
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
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: ['britqueen'],
            default_reply: function () {var urls =
                ['https://www.youtube.com/watch?v=BJKpUH2kJQg',
                 'https://www.youtube.com/watch?v=SSbBvKaM6sk',
                 'https://www.youtube.com/watch?v=dbB-mICjkQM',
                 'https://www.youtube.com/watch?v=pK7egZaT3hs',
                 'https://www.youtube.com/watch?v=rGKfrgqWcv0',
                 'https://www.youtube.com/watch?v=jhgVu2lsi_k',
                 'https://www.youtube.com/watch?v=gnIZ7RMuLpU',
                 'https://www.youtube.com/watch?v=XFkzRNyygfk',
                 'https://www.youtube.com/watch?v=9GkVhgIeGJQ',
                 'https://www.youtube.com/watch?v=hC-T0rC6m7I',
                 'https://www.youtube.com/watch?v=GZkn5eQBIh8',
                 'https://www.youtube.com/watch?v=tdkROH7Exyg',
                 'https://www.youtube.com/watch?v=fTTsY-oz6Go',
                 'https://www.youtube.com/watch?v=dJdXDc7j5jA',
                 'https://www.youtube.com/watch?v=tKjZuykKY1I',
                 'https://www.youtube.com/watch?v=PBxuq_eWW94',
                 'https://www.youtube.com/watch?v=zuuObGsB0No',
                 'https://www.youtube.com/watch?v=2C0OEVWKZv0',
                 'https://www.youtube.com/watch?v=arofKy3ehsk',
                 'https://www.youtube.com/watch?v=qObzgUfCl28',
                 'https://www.youtube.com/watch?v=bAsGFnLl2u0',
                 'https://www.youtube.com/watch?v=Zx4Hjq6KwO0',
                 'https://www.youtube.com/watch?v=yAZY3sr1URM',
                 'https://www.youtube.com/watch?v=vdkmhquF60o',
                 'https://www.youtube.com/watch?v=eYO1-gGWJyo',
                 'https://www.youtube.com/watch?v=KlmSqyMT0FQ',
                 'https://www.youtube.com/watch?v=yhDccoT81Cc',
                 'https://www.youtube.com/watch?v=GemKqzILV4w',
                 'https://www.youtube.com/watch?v=eO7tVypeYAo',
                 'https://www.youtube.com/watch?v=bzQYtpjMjSo',
                 'https://www.youtube.com/watch?v=VisSLsjrFqY',
                 'https://www.youtube.com/watch?v=FfBKqaVk2Co',
                 'https://www.youtube.com/watch?v=DlpZ8z1bNfk',
                 'https://www.youtube.com/watch?v=qk3vjIDuy9w',
                 'https://www.youtube.com/watch?v=dRdCdCtdMiU',
                 'https://www.youtube.com/watch?v=BFxaDoyl-1s',
                 'https://www.youtube.com/watch?v=tpKCqp9CALQ',
                 'https://www.youtube.com/watch?v=u7K72X4eo_s',
                 'https://www.youtube.com/watch?v=4qQyUi4zfDs',
                 'https://www.youtube.com/watch?v=-mhgfXgwdls',
                 'https://www.youtube.com/watch?v=W8r-tXRLazs',
                 'https://www.youtube.com/watch?v=_6FBfAQ-NDE',
                 'https://www.youtube.com/watch?v=h0ffIJ7ZO4U',
                 'https://www.youtube.com/watch?v=Ldyx3KHOFXw',
                 'https://www.youtube.com/watch?v=6ul-cZyuYq4',
                 'https://www.youtube.com/watch?v=wAtUw6lxcis',
                 'https://www.youtube.com/watch?v=CZXLLMbJdZ4',
                 'https://www.youtube.com/watch?v=WCbdmOdV--Y',
                 'https://www.youtube.com/watch?v=Ye7FKc1JQe4',
                 'https://www.youtube.com/watch?v=xqovGKdgAXY',
                 'https://www.youtube.com/watch?v=5n1mfhFBYdg',
                 'https://www.youtube.com/watch?v=ZFjfa_RB6Pc',
                 'https://www.youtube.com/watch?v=UK_CuMJJLwg',
                 'https://www.youtube.com/watch?v=soHC8cMRWD4',
                 'https://www.youtube.com/watch?v=LrhyoSzf3nE',
                 'https://www.youtube.com/watch?v=3VLFa2rEavI',
                 'https://www.youtube.com/watch?v=b3dQBxn34Bw',
                 'https://www.youtube.com/watch?v=gL-bTvAB2GY',
                 'https://www.youtube.com/watch?v=IPtUV01R1RE',
                 'https://www.youtube.com/watch?v=km0Byzc4UfM',
                 'https://www.youtube.com/watch?v=fKXe2T5YDQQ',
                 'https://www.youtube.com/watch?v=-f8AgWOpNt8',
                 'https://www.youtube.com/watch?v=oeXWyXlGkyg',
                 'https://www.youtube.com/watch?v=tolm-07if3c',
                 'https://www.youtube.com/watch?v=7G3h17i6xEM',
                 'https://www.youtube.com/watch?v=wh_-IoHD6oM',
                 'https://www.youtube.com/watch?v=_mTRvJ9fugM',
                 'https://www.youtube.com/watch?v=2_DZ-ijJiKM',
                 'https://www.youtube.com/watch?v=DNYrtLJA0vs',
                 'https://www.youtube.com/watch?v=Lq8s5evAfmc',
                 'https://www.youtube.com/watch?v=f0JnaxgG7zE',
                 'https://www.youtube.com/watch?v=egoef0mWIeo',
                 'https://www.youtube.com/watch?v=5Bcpj-q0Snc',
                 'https://www.youtube.com/watch?v=LBnB7uYG2HU',
                 'https://www.youtube.com/watch?v=cen1SvpTsYk',
                 'https://www.youtube.com/watch?v=-9DlgzLihxs',
                 'https://www.youtube.com/watch?v=RXy4gmApEbo',
                 'https://www.youtube.com/watch?v=tRmzIon9YG8',
                 'https://www.youtube.com/watch?v=P4MiC67seUY',
                 'https://www.youtube.com/watch?v=lir3dzYIhz0'];
                                        inputKeyDown(moveinput,'<> '+urls[RandomInt(urls.length)]);
                                       }
        }),
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: ['clickhole', 'Clickhole', 'ClickHole', 'Click Hole'],
            default_reply: function () {var urls =
                ['https://www.youtube.com/watch?v=kzV2tHk50Qw',
                 'https://www.youtube.com/watch?v=nORv34CSYv0',
                 'https://www.youtube.com/watch?v=yeQ7MdhH-4c',
                 'https://www.youtube.com/watch?v=XR3Y_9Y74L0',
                 'https://www.youtube.com/watch?v=a2_6dbrP0rg',
                 'https://www.youtube.com/watch?v=fAOjEDatpR4',
                 'https://www.youtube.com/watch?v=qALXIDpjHBY',
                 'https://www.youtube.com/watch?v=7AR6eLf6pNk',
                 'https://www.youtube.com/watch?v=IkljSppW2VY',
                 'https://www.youtube.com/watch?v=wJXgox_fl3E',
                 'https://www.youtube.com/watch?v=_JPwswJgSk4',
                 'https://www.youtube.com/watch?v=GC0WKolLJ_Q',
                 'https://www.youtube.com/watch?v=93_PDoSJESs',
                 'https://www.youtube.com/watch?v=IV8K706sqfg',
                 'https://www.youtube.com/watch?v=ELR8TxwUkWs',
                 'https://www.youtube.com/watch?v=tI_yMNUyFDM',
                 'https://www.youtube.com/watch?v=4APcgsRdW6w',
                 'https://www.youtube.com/watch?v=1HAd3hwTmAA',
                 'https://www.youtube.com/watch?v=WC66l5tPIF4',
                 'https://www.youtube.com/watch?v=NAgzCj0HT30',
                 'https://www.youtube.com/watch?v=KwiYyzdbbh0',
                 'https://www.youtube.com/watch?v=3i4-kVNCudI',
                 'https://www.youtube.com/watch?v=ic_iClOg34A',
                 'https://www.youtube.com/watch?v=DQ1SB4G7Ku4',
                 'https://www.youtube.com/watch?v=NFsVGsaCvsk',
                 'https://www.youtube.com/watch?v=v-9OLJggcAk',
                 'https://www.youtube.com/watch?v=GzgpLX49TYg',
                 'https://www.youtube.com/watch?v=6gY1AforXcI',
                 'https://www.youtube.com/watch?v=cKoEIIH-_is',
                 'https://www.youtube.com/watch?v=6GaFWuJj3LY',
                 'https://www.youtube.com/watch?v=uOaaS8IneWA',
                 'https://www.youtube.com/watch?v=e4tk--vfU1A',
                 'https://www.youtube.com/watch?v=9TSg173Dvec',
                 'https://www.youtube.com/watch?v=cjd8E1rD3m4',
                 'https://www.youtube.com/watch?v=6np-3Tzb_U0',
                 'https://www.youtube.com/watch?v=LfJTcP87hsU',
                 'https://www.youtube.com/watch?v=lzNPHTsFnBA',
                 'https://www.youtube.com/watch?v=9oonHCoKnv8',
                 'https://www.youtube.com/watch?v=BxMPWIljoSg',
                 'https://www.youtube.com/watch?v=SCpq4CaH23g',
                 'https://www.youtube.com/watch?v=P1WhcNlQIYM',
                 'https://www.youtube.com/watch?v=rAKoa9cm0-U',
                 'https://www.youtube.com/watch?v=0N4AoEywpko',
                 'https://www.youtube.com/watch?v=6JMWdgLuMy4',
                 'https://www.youtube.com/watch?v=bF3VyQC4Avg',
                 'https://www.youtube.com/watch?v=_X3IxvXEWaw',
                 'https://www.youtube.com/watch?v=fRMJHiYGXKA',
                 'https://www.youtube.com/watch?v=uXKoiJrEUtI',
                 'https://www.youtube.com/watch?v=DnqdZDmDLlQ',
                 'https://www.youtube.com/watch?v=GhTn8cBji7M',
                 'https://www.youtube.com/watch?v=Rmop6VUIFUw',
                 'https://www.youtube.com/watch?v=qvRL9YgZJGo',
                 'https://www.youtube.com/watch?v=jooUElutTGo',
                 'https://www.youtube.com/watch?v=n11k1ADFXG0',
                 'https://www.youtube.com/watch?v=QJnQJJUlBNk',
                 'https://www.youtube.com/watch?v=rTb8BaGbm-0',
                 'https://www.youtube.com/watch?v=jtXFjm8vkko',
                 'https://www.youtube.com/watch?v=9nGewrOA74U',
                 'https://www.youtube.com/watch?v=dMrw2XHTMBA',
                 'https://www.youtube.com/watch?v=V01rC6PWT-A',
                 'https://www.youtube.com/watch?v=BxeODXYD2n4',
                 'https://www.youtube.com/watch?v=BxeODXYD2n4',
                 'https://www.youtube.com/watch?v=E6xOZ-MguTs',
                 'https://www.youtube.com/watch?v=KPTEgyE4Mfw',
                 'https://www.youtube.com/watch?v=yEFFHLRSOcc',
                 'https://www.youtube.com/watch?v=J8Gs2MFh1Gg',
                 'https://www.youtube.com/watch?v=ef2QNKn1kqY',
                 'https://www.youtube.com/watch?v=oaVG4xIwMQw',
                 'https://www.youtube.com/watch?v=lODMZ0cf6bI',
                 'https://www.youtube.com/watch?v=rWjLxMGkKw8',
                 'https://www.youtube.com/watch?v=jgeYrccody4',
                 'https://www.youtube.com/watch?v=0WeSayAiXi8',
                 'https://www.youtube.com/watch?v=AG_h0Nm_YOU',
                 'https://www.youtube.com/watch?v=F1F5N4CW98Y',
                 'https://www.youtube.com/watch?v=cL5hrDeygPU',
                 'https://www.youtube.com/watch?v=R12cZeMqTFo',
                 'https://www.youtube.com/watch?v=tqrTutwW10o',
                 'https://www.youtube.com/watch?v=QbQPYlkeofI',
                 'https://www.youtube.com/watch?v=WR2Mdfwrmxc',
                 'https://www.youtube.com/watch?v=xBugKYvktg0',
                 'https://www.youtube.com/watch?v=MitTk8SMN6I',
                 'https://www.youtube.com/watch?v=e46UBSxoPdo',
                 'https://www.youtube.com/watch?v=dlTg33NOv5E',
                 'https://www.youtube.com/watch?v=KQThWbRvLKM',
                 'https://www.youtube.com/watch?v=Jv6vKo2z3mw',
                 'https://www.youtube.com/watch?v=zUxRfbe5NCA',
                 'https://www.youtube.com/watch?v=NCX6UAlVId0',
                 'https://www.youtube.com/watch?v=eDmRXlj39Dc',
                 'https://www.youtube.com/watch?v=JOvbvVvHKvQ',
                 'https://www.youtube.com/watch?v=jXvVhX2gZQE',
                 'https://www.youtube.com/watch?v=V0FNe9Gy7SY',
                 'https://www.youtube.com/watch?v=Q1C46h4anc8',
                 'https://www.youtube.com/watch?v=wKaNbK19E4I',
                 'https://www.youtube.com/watch?v=XFADBAx7wpc',
                 'https://www.youtube.com/watch?v=qZTJPMoaaiY',
                 'https://www.youtube.com/watch?v=5frVbhZqaqg',
                 'https://www.youtube.com/watch?v=xbacCBVHhlA',
                 'https://www.youtube.com/watch?v=nixUMdS9mZo',
                 'https://www.youtube.com/watch?v=3KYpbv23Dmg',
                 'https://www.youtube.com/watch?v=85Tal1wWtFI',
                 'https://www.youtube.com/watch?v=036b2GQ-hN4',
                 'https://www.youtube.com/watch?v=0DNVtghDsM8',
                 'https://www.youtube.com/watch?v=1Sfs3v5Ksww',
                 'https://www.youtube.com/watch?v=2d6cr73PB9A',
                 'https://www.youtube.com/watch?v=_2nhnypm0jY',
                 'https://www.youtube.com/watch?v=373mtkR0R38',
                 'https://www.youtube.com/watch?v=4BLXN5k0zrA',
                 'https://www.youtube.com/watch?v=4Gcwu4O5rM8',
                 'https://www.youtube.com/watch?v=4K_x4bgrXm8',
                 'https://www.youtube.com/watch?v=4KxFg1_Fzl4',
                 'https://www.youtube.com/watch?v=5_LMv_o_rLo',
                 'https://www.youtube.com/watch?v=69aglVfi6AU',
                 'https://www.youtube.com/watch?v=7GBpCRxItj4',
                 'https://www.youtube.com/watch?v=7rEZBd52cLg',
                 'https://www.youtube.com/watch?v=8PiRh0bw1S8',
                 'https://www.youtube.com/watch?v=8xyx1wpxlr4',
                 'https://www.youtube.com/watch?v=8zVdcihgngM',
                 'https://www.youtube.com/watch?v=-AkEYfMA73M',
                 'https://www.youtube.com/watch?v=AuHDrdzb-q4',
                 'https://www.youtube.com/watch?v=BfpA0Cfxl2I',
                 'https://www.youtube.com/watch?v=Bl-iCZE_x0Q',
                 'https://www.youtube.com/watch?v=BmfPFxFYGJs',
                 'https://www.youtube.com/watch?v=bo7Malnav1k',
                 'https://www.youtube.com/watch?v=C2xuKfkUvt0',
                 'https://www.youtube.com/watch?v=C8VPYLmPCpw',
                 'https://www.youtube.com/watch?v=_CH6p0kD4EE',
                 'https://www.youtube.com/watch?v=ciZRd4P5U-g',
                 'https://www.youtube.com/watch?v=CQCuokLVsTo',
                 'https://www.youtube.com/watch?v=DSSmiQrSlwU',
                 'https://www.youtube.com/watch?v=eXBcMs5554g',
                 'https://www.youtube.com/watch?v=f88vxqUPydo',
                 'https://www.youtube.com/watch?v=feMcHe5DcNg',
                 'https://www.youtube.com/watch?v=Fo_uAgNg9cc',
                 'https://www.youtube.com/watch?v=FY9TJTN3i5w',
                 'https://www.youtube.com/watch?v=f-Z9oBr-TtM',
                 'https://www.youtube.com/watch?v=GCQJn4zo0kk',
                 'https://www.youtube.com/watch?v=gFMZvGWaz9s',
                 'https://www.youtube.com/watch?v=hh3Y_yXWDQs',
                 'https://www.youtube.com/watch?v=hpT6uS7F8tI',
                 'https://www.youtube.com/watch?v=hrLxcUdaR7s',
                 'https://www.youtube.com/watch?v=i5ZLv8T7EQk',
                 'https://www.youtube.com/watch?v=i8Dbnw-tajs',
                 'https://www.youtube.com/watch?v=-IaJC_PDEvY',
                 'https://www.youtube.com/watch?v=IolK3V7s0dY',
                 'https://www.youtube.com/watch?v=IsSY7vv500U',
                 'https://www.youtube.com/watch?v=IXFNgG---OM',
                 'https://www.youtube.com/watch?v=J-hnReNXkUE',
                 'https://www.youtube.com/watch?v=JHt3E25ymts',
                 'https://www.youtube.com/watch?v=L68SHTBhVaE',
                 'https://www.youtube.com/watch?v=lRgjpMnTl3I',
                 'https://www.youtube.com/watch?v=lvssfK8nal4',
                 'https://www.youtube.com/watch?v=MwKZTV_TzfM',
                 'https://www.youtube.com/watch?v=nbN9Er0hCxQ',
                 'https://www.youtube.com/watch?v=NByUBC1qF5w',
                 'https://www.youtube.com/watch?v=nfv5Ksj55iE',
                 'https://www.youtube.com/watch?v=nGTZ_Lh3yRw',
                 'https://www.youtube.com/watch?v=nRZYFjRM528',
                 'https://www.youtube.com/watch?v=nsELsi2PyJs',
                 'https://www.youtube.com/watch?v=nv2OhZphINw',
                 'https://www.youtube.com/watch?v=Odd1zb0KuIk',
                 'https://www.youtube.com/watch?v=ORw-vQYPg4g',
                 'https://www.youtube.com/watch?v=OsX1OezTNYM',
                 'https://www.youtube.com/watch?v=PGTzKFX1oN0',
                 'https://www.youtube.com/watch?v=plxgAfVjHSM',
                 'https://www.youtube.com/watch?v=PMEnAG3mOqQ',
                 'https://www.youtube.com/watch?v=PMKDdzxMQtU',
                 'https://www.youtube.com/watch?v=PONb87rRkDY',
                 'https://www.youtube.com/watch?v=pr9oV--lpkI',
                 'https://www.youtube.com/watch?v=pRL248_2g3s',
                 'https://www.youtube.com/watch?v=Qm3KmRFWkTA',
                 'https://www.youtube.com/watch?v=Qp1973cuOyY',
                 'https://www.youtube.com/watch?v=QQ6reXhzeAA',
                 'https://www.youtube.com/watch?v=S8qqWrIH9IQ',
                 'https://www.youtube.com/watch?v=sJuYuu2CfVc',
                 'https://www.youtube.com/watch?v=SvZQOUSnBiw',
                 'https://www.youtube.com/watch?v=TE4V-jCE4CU',
                 'https://www.youtube.com/watch?v=tebqmr8luuc',
                 'https://www.youtube.com/watch?v=tLZ2ZBUrQiM',
                 'https://www.youtube.com/watch?v=tv7RHjHtVbc',
                 'https://www.youtube.com/watch?v=Uq4GvA-AF3U',
                 'https://www.youtube.com/watch?v=Vp1NR4DKwU0',
                 'https://www.youtube.com/watch?v=VTrCx2YCjQc',
                 'https://www.youtube.com/watch?v=wknQDEJ4bME',
                 'https://www.youtube.com/watch?v=WXjTqbdDokk',
                 'https://www.youtube.com/watch?v=XAjaiEy4LUo',
                 'https://www.youtube.com/watch?v=xdIrQmX4HEk',
                 'https://www.youtube.com/watch?v=yJOKOEz-LVY',
                 'https://www.youtube.com/watch?v=zcRIRTnxgj4'];
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
ghibli (plays a random Studio Ghibli Soundtrack)
porter (plays a random Porter Robinson song)
flcl (plays a random song from FlCl)
toradora (plays a random song from Toradora)
clickhole (plays a random clickhole video)
radio (post media link to Touhou Radio),
help (displays this help message)`
        }),
        //displays this source page
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: 'show your brain',
            reply_to_user: {
                'Ruby': '/https://raw.githubusercontent.com/mei-iirose/qmei/master/qmei.js',
                'èŠ±Q': '/https://raw.githubusercontent.com/mei-iirose/qmei/master/qmei.js',
                '1%': 'unauthorized',
                default_reply: 'unauthorized'
            }
        })
    ];
    var isMeisHouse=['19_58173ede6c2c6', '19_58173ede6c2c6_1'].indexOf(roomn)>-1;
    var isVidHouse=['19_588c8a9fa219e_2', '19_588c8a9fa219e_8', '19_58173ede6c2c6', '19_58173ede6c2c6_1'].indexOf (roomn)>-1;
    if(isMeisHouse){
        MATCH_RULES.push(MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: ['Lewd', 'lewd', 'loods', 'lewds', 'Lewds'],
            default_reply: ['https://i.imgur.com/C1nrsn7.png',
                            'https://i.imgur.com/WBhpRb7.png',
                            'https://i.imgur.com/0sX7wTI.png',
                            'https://i.imgur.com/E2KdG6d.png',
                            'https://i.imgur.com/YDVySNt.png',
                            'https://i.imgur.com/oTBgB0M.png',
                            'https://i.imgur.com/C1nrsn7.png',
                            'https://i.imgur.com/tCAFemv.png',
                            'https://i.imgur.com/Rt404tt.png',
                            'https://i.imgur.com/bnCmlGN.png',
                            'https://i.imgur.com/Ncmk49X.png',
                            'https://i.imgur.com/uzkEK9w.png',
                            'https://i.imgur.com/vjiCmKs.png',
                            'https://i.imgur.com/WB0Qj7Y.png',
                            'https://i.imgur.com/PAxxtIc.png']
        })
                        );
    }else{
        MATCH_RULES.push(MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: ['Lewd', 'lewd', 'loods', 'lewds', 'Lewds'],
            default_reply: function () {
                var urls=['http://img03.deviantart.net/5491/i/2012/319/b/7/achievement_unlocked__you_are_a_pervert_by_kitsuneyin-d5l1ica.jpg',
                          'http://pa1.narvii.com/5961/a6da21c2342e3acf67372b709e839fae4dbd1730_hq.gif',
                          'https://pics.onsizzle.com/when-vou-encounter-a-prune-faced-old-pervert-you-prune-27357788.png',
                          'https://i.pinimg.com/736x/7b/2b/37/7b2b3730648ae3b91700c80deff27ba7.jpg',
                          'http://pre09.deviantart.net/8f76/th/pre/f/2013/014/7/1/achievement_unlocked__you_are_a_pervert_by_kitsuneyin-d5rfjb6.jpg',
                          'https://cdn.meme.am/cache/instances/folder317/500x/66161317/yoda-pervert-you-are-burn-in-hell-you-will.jpg'];
                }
        }));
    }
    if (isVidHouse) {
        MATCH_RULES.push(
            MatchRule({
                begin_with_keyword: [myself + ' &lt;', 'q!'],
                include_keyword: ['toradora', 'Toradora'],
                default_reply: function () {
                    var urls = ['https://www.youtube.com/watch?v=ZkX-QjNW7_Y',
                                'https://www.youtube.com/watch?v=jPz9BZGPqXY',
                                'https://www.youtube.com/watch?v=FE4XB6WAby8',
                                'https://www.youtube.com/watch?v=wigTf6zKZPU',
                                'https://www.youtube.com/watch?v=PdTcJDi90V8',
                                'https://www.youtube.com/watch?v=fGRqKsQRUH4',
                                'https://www.youtube.com/watch?v=WPhTJcNryI8',
                                'https://www.youtube.com/watch?v=wWTtqCLs9ls',
                                'https://www.youtube.com/watch?v=k8-31Hu-aG0',
                                'https://www.youtube.com/watch?v=NVhpQThn1kM',
                                'https://www.youtube.com/watch?v=C1dQ1XNMWpw',
                                'https://www.youtube.com/watch?v=DCEeKuoGX2A',
                                'https://www.youtube.com/watch?v=GAWy2zMpkDg',
                                'https://www.youtube.com/watch?v=m9mSReNGlyc',
                                'https://www.youtube.com/watch?v=_i84RZMbmeQ',
                                'https://www.youtube.com/watch?v=S_1f4x957QI',
                                'https://www.youtube.com/watch?v=0G89m1IUGAc',
                                'https://www.youtube.com/watch?v=xvUrmYlKOHk',
                                'https://www.youtube.com/watch?v=5NN-Oac4DXw',
                                'https://www.youtube.com/watch?v=tQz-uFPBxQc',
                                'https://www.youtube.com/watch?v=lk0gm_Z81bE',
                                'https://www.youtube.com/watch?v=_4EeMEWo2zQ',
                                'https://www.youtube.com/watch?v=0WI9JiPQdRo',
                                'https://www.youtube.com/watch?v=ERTAcF0r3D8',
                                'https://www.youtube.com/watch?v=4nXwkA32GFE',
                                'https://www.youtube.com/watch?v=VQbrX7PR4Fw',
                                'https://www.youtube.com/watch?v=rw4WjrGcuUQ',
                                'https://www.youtube.com/watch?v=VLgLCOoDRpM',
                                'https://www.youtube.com/watch?v=nXes1N-ub6Q',
                                'https://www.youtube.com/watch?v=0I3c_qQ6LIE',
                                'https://www.youtube.com/watch?v=8tZfyE50Mwg',
                                'https://www.youtube.com/watch?v=WUz6W3EBsxk',
                                'https://www.youtube.com/watch?v=eu5lrJtteWE',
                                'https://www.youtube.com/watch?v=4A1o_H_fTHc',
                                'https://www.youtube.com/watch?v=Yc1AuSlmlyI'];
                    inputKeyDown(moveinput,'<> '+urls[RandomInt(urls.length)]);
                }
            })
        );
    } else {
        MATCH_RULES.push(
            MatchRule({
                begin_with_keyword: [myself + ' &lt;', 'q!'],
                include_keyword: ['Toradora', 'toradora'],
                default_reply: function () {
                    var urls = ['http://music.163.com/song?id=583220',
                                'http://music.163.com/song?id=583222',
                                'http://music.163.com/song?id=583224',
                                'http://music.163.com/song?id=583227',
                                'http://music.163.com/song?id=583230',
                                'http://music.163.com/song?id=583233',
                                'http://music.163.com/song?id=583236',
                                'http://music.163.com/song?id=583238',
                                'http://music.163.com/song?id=583239',
                                'http://music.163.com/song?id=583240',
                                'http://music.163.com/song?id=583241',
                                'http://music.163.com/song?id=583242',
                                'http://music.163.com/song?id=583243',
                                'http://music.163.com/song?id=583244',
                                'http://music.163.com/song?id=583245',
                                'http://music.163.com/song?id=583246',
                                'http://music.163.com/song?id=583247',
                                'http://music.163.com/song?id=583248',
                                'http://music.163.com/song?id=583249',
                                'http://music.163.com/song?id=583251',
                                'http://music.163.com/song?id=583253',
                                'http://music.163.com/song?id=583255',
                                'http://music.163.com/song?id=583257',
                                'http://music.163.com/song?id=583259',
                                'http://music.163.com/song?id=583262',
                                'http://music.163.com/song?id=583265',
                                'http://music.163.com/song?id=583268',
                                'http://music.163.com/song?id=583271',
                                'http://music.163.com/song?id=583273',
                                'http://music.163.com/song?id=583277',
                                'http://music.163.com/song?id=583281',
                                'http://music.163.com/song?id=583285'];
                    inputKeyDown(moveinput,'<> '+urls[RandomInt(urls.length)]);
                }
            })
        );
    }
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

