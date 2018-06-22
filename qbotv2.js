MatchRule({
            begin_with_keyword: ['hi mei', 'Hi Mei', 'hi Mei', 'Hi mei', 'Hello Mei', 'hello Mei', 'hello mei'],
            reply_to_user: {
                '花Q': 'mei\'s brain feels glitchy',
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
            end_with_keyword: 'bye',
            default_reply: 'bye!'
        }),
                
        //fetches weather info for minnesota from noaa
        MatchRule({
            include_keyword: 'q!weather',
            default_reply: 'Hazy with a chance of updates'
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
        
         //if you use this mei will murder you          
             MatchRule({
             include_keyword: 'q!lewd',
             default_reply: ['https://i.imgur.com/vjiCmKs.png', 'https://i.imgur.com/uzkEK9w.png', 'https://i.imgur.com/Rt404tt.png']
        }),
                
        //displays this source page
            MatchRule({
            include_keyword: 'show your brain',
            default_reply: '\https://raw.githubusercontent.com/mei-iirose/qbot/master/qbot.js'
        })
    ];
