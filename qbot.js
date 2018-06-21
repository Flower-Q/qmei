// ==UserScript==
// @name       iirose-mei-bot
// @include    https://iirose.com/messages.html
// @grant      none
// ==/UserScript==

(function () {
    'use strict';

    const JOIN_MESSAGE = `(= =) じーーーー`;
    const COME_BACK_MESSAGE = `come back!`;
    const MATCH_RULES = [
        MatchRule({
            begin_with_keyword: ['hi mei', 'Hi Mei', 'hi Mei', 'Hi mei', 'Hello Mei', 'hello Mei', 'hello mei'],
            default_reply: 'has no eyebrows!'
        }),

        MatchRule({
            include_keyword: 'hello',
            reply_to_user: {
                'not mei': 'Operating at 4.02% efficiency',
            },
            default_reply: 'has no eyebrows!'
        }),

        MatchRule({
            include_keyword: ['poke', 'Poke', 'POKE'],
            reply_to_user: {
                'Cargo': 'mei will poke your eye with a carrot!',
            },
            default_reply: 'mei will bite you!'
        }),
        
        //this is working, media player provided by site
            MatchRule({
            include_keyword: 'meis music',
            default_reply: '\http://touhouradio.com:8000/.mp3'
        }),
      
            MatchRule({
            include_keyword: 'bye',
            default_reply: 'bye!'
        }),
        
        //fetches weather info for minnesota from noaa
            MatchRule({
            include_keyword: 'q!weather',
            default_reply: 'hazy with a chance of updates'
        }),
            
        //pairs two users in the chat
            MatchRule({
            include_keyword: 'q!ship',
            default_reply: 'mei hasnt gotten a marriage license yet D:'
        }),
        
        //displays random whole number between 0001 and 9999
            MatchRule({
            include_keyword: 'q!roll',
            default_reply: 'coming soon ^_^'
        }),
        
        //fetches horoscope
            MatchRule({
            include_keyword: 'q!fortune <zodiac>',
            default_reply: 'zodiac not yet available >~<'
        }),
        
        //initiates macro to give thief 4 gold
            MatchRule({
            include_keyword: '*steals gold*',
            default_reply: 'wha?! mei had more than this a moment ago...'
        }),
            
        //just for lulz    
            MatchRule({
            include_keyword: 'q!pantsu',
            default_reply: 'https://i.imgur.com/PAxxtIc.png'
        }),
        
        //displays this source page
            MatchRule({
            include_keyword: 'show your brain',
            default_reply: '\https://raw.githubusercontent.com/mei-iirose/qbot/master/qbot.js'
        })
    ];
  
    getcontents = (function() {
        var baseFunc = getcontents;

        const JOINED = 'm__1';
        const MOVED = 'm__2';
        const LEFT = 'm__3';

        return function() {
            baseFunc.apply(this, arguments);

            arguments[0].split('<').forEach(function (msg) {
                msg = msg.split('>');

                var user = msg[2];
                var msgContent = msg[3];

                if (user === myself) {
                    var victim = (/bring\sback\s+(.*)/.exec(msgContent) || ['', null])[1];
                    if (victim !== null) {
                        BringBack(victim);
                    }
                } else if (msgContent === LEFT || msgContent.lastIndexOf(MOVED, 0) === 0) {
                    SendMessage(user + ' < ' + COME_BACK_MESSAGE);
                } else if (msgContent === JOINED) {
                    SendMessage(user + ' < ' + JOIN_MESSAGE);
                } else {
                    MATCH_RULES.forEach(function (rule) {
                        var reply = rule.match(user, msgContent);
                        if (typeof reply === 'string') {
                            SendMessage(user + ' < ' + reply);
                        }
                    });
                }
            });
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
        var matchBegin = function (message) {
            var begin = rule.begin_with_keyword;

            if (begin === undefined) {
                return true;
            } else if (typeof begin === 'string') {
                return message.lastIndexOf(begin, 0) === 0;
            } else {
                return begin.length === 0 || begin.some(function (elem) { return message.lastIndexOf(elem, 0) === 0 });
            }
        };

        var matchInclude = function (message) {
            var include = rule.include_keyword;

            if (include === undefined) {
                return true;
            } else if (typeof include === 'string') {
                return message.indexOf(include) !== -1;
            } else {
                return include.length === 0 || include.some(function (elem) { return message.indexOf(elem) !== -1 });
            }
        };

        var matchEnd = function (message) {
            var end = rule.end_with_keyword;

            if (end === undefined) {
                return true;
            } else if (typeof end === 'string') {
                return message.endsWith(end);
            } else {
                return end.length === 0 || end.some(function (elem) { return message.endsWith(elem) });
            }
        };

        var matchReply = function (user) {
            if (rule.hasOwnProperty('reply_to_user')
                    && rule.reply_to_user.hasOwnProperty(user)) {
                return rule.reply_to_user[user];
            } else if (rule.hasOwnProperty('default_reply')) {
                return rule.default_reply;
            }
        };

        return {
            rule: rule,
            match: function (user, message) {
                var matched = (rule.hasOwnProperty('begin_with_keyword')
                               || rule.hasOwnProperty('include_keyword')
                               || rule.hasOwnProperty('end_with_keyword'))
                            && matchBegin(message)
                            && matchInclude(message)
                            && matchEnd(message)
                            && matchReply(message);
                if (matched) {
                    return matchReply(user);
                }
            }
        };
    };
})();
