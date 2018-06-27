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
            },
            default_reply: 'mei will bite you!'
        }),


        MatchRule({
            end_with_keyword: 'bye',
            default_reply: null
        }),
        //this is working, media player provided by site
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: 'radio',
            default_reply: '\http://touhouradio.com:8000/.mp3'
        }),
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: ['Nier', 'nier'],
            default_reply: ['https://www.youtube.com/watch?v=xRHsEWIC8PI',
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
                            'https://www.youtube.com/watch?v=DLAvHLQGOco']


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
        var datetime = "Last Sync: " + currentdate.getDate() + "/"
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
