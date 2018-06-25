// ==UserScript==
// @name         q!mei
// @namespace    https://github.com/mei-iirose/qbot/blob/master/qmei.js
// @version      1.0
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
                'Cargo': 'weba!',
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
            default_reply: getRandomColor()
        }),
        //q!meitime
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: 'time',
            default_reply: currentDateTime()
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
            default_reply: 'https://i.imgur.com/PAxxtIc.png'
        }),
        //if you use this mei will murder you
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: 'lewd',
            default_reply: ['http://img03.deviantart.net/5491/i/2012/319/b/7/achievement_unlocked__you_are_a_pervert_by_kitsuneyin-d5l1ica.jpg', 'http://pre09.deviantart.net/8f76/th/pre/f/2013/014/7/1/achievement_unlocked__you_are_a_pervert_by_kitsuneyin-d5rfjb6.jpg', 'https://cdn.meme.am/cache/instances/folder317/500x/66161317/yoda-pervert-you-are-burn-in-hell-you-will.jpg', '', 'https://i.imgur.com/C1nrsn7.png', 'https://i.imgur.com/WBhpRb7.png', 'https://i.imgur.com/0sX7wTI.png', 'https://i.imgur.com/E2KdG6d.png', 'https://i.imgur.com/YDVySNt.png', 'https://i.imgur.com/oTBgB0M.png', 'https://i.imgur.com/C1nrsn7.png', 'https://i.imgur.com/tCAFemv.png', 'https://i.imgur.com/Rt404tt.png', 'https://i.imgur.com/bnCmlGN.png', 'https://i.imgur.com/Ncmk49X.png', 'https://i.imgur.com/uzkEK9w.png', 'https://i.imgur.com/vjiCmKs.png', 'https://i.imgur.com/WB0Qj7Y.png', 'https://i.imgur.com/PAxxtIc.png']
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

        var getReply = function (user) {
            if (rule.hasOwnProperty('reply_to_user')
                && rule.reply_to_user.hasOwnProperty(user)) {
                return rule.reply_to_user[user];
            } else if (rule.hasOwnProperty('default_reply')) {
                if (typeof rule.default_reply === 'string') {
                    return rule.default_reply;
                } else {
                    return rule.default_reply[RandomInt(rule.default_reply.length)];
                }
            }
        };

        return function (user, message) {
            if (regex.test(message)) {
                return getReply(user);
            }
        };
    };

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
