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
        MatchRule({
            begin_with_keyword: [myself + ' &lt;', 'q!'],
            include_keyword: ['Nier', 'nier'],
            default_reply: [`NieR: Automata OST - Wretched Weaponry (Quiet - Vocals)
https://www.youtube.com/watch?v=xRHsEWIC8PI`,
                            `NieR:Automata OST - Wretched Weaponry (Medium - Vocals)
https://www.youtube.com/watch?v=FpjTILokyKM`,
                            `NieR:Automata OST - Wretched Weaponry (Dynamic - Vocals)
https://www.youtube.com/watch?v=oQT_LwV2qwM`,
                            `NieR:Automata OST - Fortress of Lies
https://www.youtube.com/watch?v=FMBScNW_CNc`,
                            `NieR: Automata OST - City Ruins (Quiet - Vocals)
https://www.youtube.com/watch?v=ppIvG6PBmCI`,
                            `NieR: Automata OST - City Ruins (Medium - Vocals)
https://www.youtube.com/watch?v=ZW_zO1ox8XE`,
                            `NieR: Automata OST - City Ruins (Dynamic - Vocals)
https://www.youtube.com/watch?v=Tx0U9UsUgpI`,
                            `NieR: Automata OST - Peaceful Sleep (Vocals)
https://www.youtube.com/watch?v=OUpGltfOU10`,
                            `NieR: Automata OST - Memories of Dust (Quiet - Vocals)
https://www.youtube.com/watch?v=T08xuOatEZk`,
                            `NieR: Automata OST - Memories of Dust (Medium - Vocals)
https://www.youtube.com/watch?v=dXmRPWXIvag`,
                            `NieR: Automata OST - Memories of Dust (Dynamic - Vocals)
https://www.youtube.com/watch?v=5SW1Zy6-EDw`,
                            `NieR: Automata OST - Amusement Park (Quiet - Vocals)
https://www.youtube.com/watch?v=k_YDwZ-9gaA`,
                            `NieR: Automata OST - Amusement Park (Medium - Vocals)
https://www.youtube.com/watch?v=j4n5sx6qUVc`,
                            `NieR: Automata OST - Amusement Park (Dynamic - Vocals)
https://www.youtube.com/watch?v=jjDO91gNiCU`,
                            `NieR: Automata OST - A Beautiful Song (Opera Boss Theme)
https://www.youtube.com/watch?v=YMKskuvJTcs`,
                            `NieR: Automata OST - A Beautiful Song (Instrumental)
https://www.youtube.com/watch?v=UZi0Qyjvyw8`,
                            `NieR: Automata OST - Pascal
https://www.youtube.com/watch?v=tGFOvuOxwuU`,
                            `NieR: Automata OST - Pascal (Instrumental)
https://www.youtube.com/watch?v=M06yl1wupn8`,
                            `NieR: Automata OST - Forest Kingdom (Quiet - Vocals)
https://www.youtube.com/watch?v=10A5egJh6OQ`,
                            `NieR: Automata OST - Forest Kingdom (Medium - Vocals)
https://www.youtube.com/watch?v=1or6ny00BAY`,
                            `NieR: Automata OST - Forest Kingdom (Dynamic - Vocals)
https://www.youtube.com/watch?v=p93KTqknXig`,
                            `NieR: Automata OST - Copied City (Quiet - Vocals)
https://www.youtube.com/watch?v=uGR5eklLV88`,
                            `NieR: Automata OST - Copied City (Dynamic - Vocals)
https://www.youtube.com/watch?v=uUmktoDFFKM`,
                            `NieR: Automata OST - The Tower (Quiet - Vocals)
https://www.youtube.com/watch?v=_6EwwGwmfM0`,
                            `NieR: Automata OST - Tower (Medium - Vocals)
https://www.youtube.com/watch?v=b4qEh8agDwI`,
                            `NieR: Automata OST - Tower (Dynamic - Vocals)
https://www.youtube.com/watch?v=tEpuIrGFj-M`,
                            `NieR: Automata OST - Possessed by a Disease (Vocals)
https://www.youtube.com/watch?v=VPXuopwIdBo`,
                            `NieR: Automata OST - Possessed by Disease (Become God - Vocals)
https://www.youtube.com/watch?v=3ruk7G3r14I`,
                            `NieR: Automata OST - Birth of a Wish
https://www.youtube.com/watch?v=z49X4rpxdQE`,
                            `NieR: Automata OST - Birth of a Wish (Become God - Vocals)
https://www.youtube.com/watch?v=_Wi5KenZI9I`,
                            `NieR: Automata OST - Birth of a Wish (This Cannot Continue -  Vocals)
https://www.youtube.com/watch?v=l1RM8ECQe5g`,
                            `NieR: Automata OST - Emil (Despair - vocals)
https://www.youtube.com/watch?v=Vf-GY3ezkHU`,
                            `NieR: Automata OST - Grandma (Destruction)
https://www.youtube.com/watch?v=ihV2388iAp0`,
                            `NieR: Automata OST - Bipolar Nightmare  (Vocals)
https://www.youtube.com/watch?v=rQuHwqMcN8w`,
                            `NieR: Automata OST - Bipolar Nightmare (Instrumental)
https://www.youtube.com/watch?v=9y8GLHLOCbk`,
                            `NieR: Automata OST - War to War
https://www.youtube.com/watch?v=mFhM1ayTsqE`,
                            `NieR: Automata OST - End of the Unknown (Quiet - Vocals)
https://www.youtube.com/watch?v=Hsp5Zqqf4PI`,
                            `NieR: Automata OST - End of the Unknown  (Adam and Eve)
https://www.youtube.com/watch?v=k5Figo-QTW0`,
                            `NieR: Automata OST - Dark Colossus (Quiet - Vocals)
https://www.youtube.com/watch?v=3QbkjyuO6l4`,
                            `NieR: Automata OST - Dark Colossus (Medium - Vocals)
https://www.youtube.com/watch?v=t7wJYftFRbY`,
                            `NieR: Automata OST - Dark Colossus (Dynamic - Vocals)
https://www.youtube.com/watch?v=Hc0U4Ik1yN4`,
                            `NieR: Automata OST - Dependent Weakling (Final Boss - Vocals)
https://www.youtube.com/watch?v=vK67sHPC4mM`,
                            `NieR: Automata OST - Crumbling Lies
https://www.youtube.com/watch?v=ePKjkPl8jJs`,
                            `Nier: Automata OST - Crumbling Lies (Front)
https://www.youtube.com/watch?v=s7sX41zOqAY`,
                            `NieR: Automata OST - Song of the Ancients - Atonement (Vocals)
https://www.youtube.com/watch?v=CKOM3lNFajE`,
                            `NieR: Automata OST - Song of the Ancients - Atonement (Instrumental)
https://www.youtube.com/watch?v=anXUayBofPA`,
                            `NieR: Automata OST - Sound of the End (Dynamic - Vocals)
https://www.youtube.com/watch?v=z5YChAFjxks`,
                            `NieR: Automata OST - Alien Manifestation (Vocals)
https://www.youtube.com/watch?v=ntHbvoYr1Lk`,
                            `NieR: Automata OST - Alien Manifestation (Instrumental)
https://www.youtube.com/watch?v=7I2kb9nB-RE`,
                            ` 已刪除的影片,
https://www.youtube.com/watch?v=0bJznex0eYQ`,
                            `NieR: Automata OST - Voice of No Return
https://www.youtube.com/watch?v=ubMf__iB8iI`,
                            `NieR: Automata OST - Mourning
https://www.youtube.com/watch?v=AzdNqDHpNWo`,
                            `NieR: Automata OST - Faltering Prayer - Dawn Breeze (Vocals)
https://www.youtube.com/watch?v=52O7YWYGIEU`,
                            `NieR: Automata OST - Faltering Prayer - Starry Sky
https://www.youtube.com/watch?v=bT4SviJIB98`,
                            `NieR: Automata OST - The Color of Depression
https://www.youtube.com/watch?v=f5izHod68uI`,
                            `NieR: Automata OST - Blissful Death (Vocals)
https://www.youtube.com/watch?v=ZNJ6LO1QIyk`,
                            `NieR: Automata OST - Broken Heart (Vocals)
https://www.youtube.com/watch?v=LYc3z9H8OFM`,
                            `NieR: Automata OST - Widespread Illness (Vocals)
https://www.youtube.com/watch?v=F9B1RF3n7XA`,
                            `NieR: Automata OST - Treasured Times (Vocals)
https://www.youtube.com/watch?v=Ne1HcEU7sho`,
                            `NieR: Automata OST - Rebirth
https://www.youtube.com/watch?v=xcSSsa6AE2M`,
                            `NieR: Automata OST - Weight of the World (Japanese)
https://www.youtube.com/watch?v=SGUeKCA5p1A`,
                            `NieR: Automata OST - Weight of the World (Emi Evans)
https://www.youtube.com/watch?v=wn_janwmzRU`,
                            `NieR: Automata OST - Emil&#39;s Song
https://www.youtube.com/watch?v=OwBh_7zV4Wo`,
                            `NieR: Automata OST - Wretched Weaponry (8-bit)
https://www.youtube.com/watch?v=lhtYq3gBHmI`,
                            `NieR: Automata OST - City Ruins - Rays of Light (8-bit)
https://www.youtube.com/watch?v=APfedkre9Rg`,
                            `NieR: Automata OST - Memories of Dust (8-bit)
https://www.youtube.com/watch?v=TiFDKDczykM`,
                            `NieR: Automata OST - Amusement Park (8-bit)
https://www.youtube.com/watch?v=R_NvlZu5v-Y`,
                            `NieR: Automata OST - City Ruins - Shade (8-bit)
https://www.youtube.com/watch?v=A9TKBjsut0s`,
                            `NieR: Automata OST - Forest Kingdom (8-bit)
https://www.youtube.com/watch?v=XA7OcgaYBW4`,
                            `NieR: Automata OST - The Tower (8-bit)
https://www.youtube.com/watch?v=gv7SWWYmQFU`,
                            `NieR: Automata OST - Birth of a Wish (8-bit)
https://www.youtube.com/watch?v=kQrgqcqAllw`,
                            `NieR: Automata OST - War
https://www.youtube.com/watch?v=ft0J9YhXUNk`,
                            `NieR: Automata OST - A beautiful Song (8-bit)
https://www.youtube.com/watch?v=mtTVtJevr3E`,
                            `NieR: Automata OST - End of the Unknown (8-bit)
https://www.youtube.com/watch?v=CGu0i8xGjA8`,
                            `NieR: Automata OST - Dark Colossus (8-bit)
https://www.youtube.com/watch?v=6feWpInlH1A`,
                            `NieR: Automata OST - Dependent Weakling (8-bit)
https://www.youtube.com/watch?v=5XoTXjxgu0U`,
                            `NieR: Automata OST - Song of the Ancients (8-bit)
https://www.youtube.com/watch?v=hi5hkVlWerQ`,
                            `NieR: Automata OST - Sound of the End (8-bit)
https://www.youtube.com/watch?v=bw2U_0fIfNo`,
                            `NieR: Automata OST - Weight of the World (8-bit)
https://www.youtube.com/watch?v=7n9aWlxVU8s`,
                            `NieR: Automata OST - The End of YoRHa
https://www.youtube.com/watch?v=DLAvHLQGOco`]

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
