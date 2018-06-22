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
            reply_to_user: {
                ['花Q': 'mei\'s brain feels glitchy',
                'Ruby: 'Rubeh Rubeh Rubeh!,]
            },
            default_reply: 'has no eyebrows!'
        }),

        MatchRule({
            include_keyword: 'hello',
            reply_to_user: {
                '鳴 「Mei」': 'soup!',
            },
            default_reply: 'has no eyebrows!'
        }),

      MatchRule({
            end_with_keyword: ['poke', 'pokes'],
            reply_to_user: {
                '1%': 'rebooting...',
            },
            default_reply: 'mei will bite you!'
        }),


        MatchRule({
            end_with_keyword: 'bye',
            default_reply: 'bye!'
        }),
                
        //fetches weather info for minnesota from noaa
        MatchRule({
            include_keyword: 'q!weather',
            default_reply: ['Today: Scattered clouds, with a high around 60. Northeast wind around 10 mph slowing toward evening. Tonight: Partly cloudy, with a low around 48. Northeast wind around 5 mph becoming calm after midnight. Tomorrow: Mostly sunny, with a high near 72. Calm wind becoming east around 5 mph in the afternoon. Tomorrow Night: Partly cloudy, with a low around 51. East wind around 5 mph becoming calm after midnight.']
        }),
            
        //pairs two users in the chat
            MatchRule({
            include_keyword: 'q!ship',
            default_reply: 'mei hasnt gotten a marriage license yet D:'
        }),
        
        //displays random whole number between 0001 and 9999
            MatchRule({
            include_keyword: 'q!roll',
            default_reply: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
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
        
         //if you use this mei will murder you          
             MatchRule({
             include_keyword: 'q!lewd',
             default_reply: ['https://i.imgur.com/WB0Qj7Y.png', 'https://i.imgur.com/bnCmlGN.png', 'https://i.imgur.com/oTBgB0M.png', 'https://i.imgur.com/vjiCmKs.png', 'https://i.imgur.com/uzkEK9w.png', 'https://i.imgur.com/Rt404tt.png']
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
        var matchAll = function (str, keywords, matchFunc) {
            if (typeof keywords === 'string') {
                return matchFunc(str, keywords);
            } else {
                return keywords.length === 0 || keywords.some(function (keyword) {
                    return matchFunc(str, keyword)
                });
            }
        };

        var matchBegin = function (message) {
            return matchAll(message, rule.begin_with_keyword, function (str, keyword) {
                return str.lastIndexOf(keyword, 0) === 0;
            });
        };

        var matchInclude = function (message) {
            return matchAll(message, rule.include_keyword, function (str, keyword) {
                return str.indexOf(keyword) !== -1;
            });
        };

        var matchEnd = function (message) {
            return matchAll(message, rule.end_with_keyword, function (str, keyword) {
                return str.endsWith(keyword);
            });
        };

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
            var matched = (!rule.hasOwnProperty('begin_with_keyword') || matchBegin(message)) &&
                          (!rule.hasOwnProperty('include_keyword') || matchInclude(message)) &&
                          (!rule.hasOwnProperty('end_with_keyword') || matchEnd(message));
            if (matched) {
                return getReply(user);
            }
        };
    };

    function RandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
})();
