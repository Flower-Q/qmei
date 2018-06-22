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
                '花Q': '<say hello to 花Q>',
            },
            default_reply: 'has no eyebrows!'
        }),

        MatchRule({
            include_keyword: 'hello',
            reply_to_user: {
                '鳴 「Mei」': '<say hello to Mei>',
            },
            default_reply: 'has no eyebrows!'
        }),

        MatchRule({
            end_with_keyword: 'bye',
            default_reply: 'bye!'
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
                return rule.default_reply;
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
})();
