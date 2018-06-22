
Violentmonkey
Installed scripts
Settings
About
qbot
0min
Script Editor
Code
Settings
Values
How to edit with your favorite editor?

1

// ==UserScript==

2

// @name       iirose-mei-bot

3

// @include    https://iirose.com/messages.html

4

// @grant      none

5

// ==/UserScript==

6

​

7

(function () {

8

    'use strict';

9

​

10

    const JOIN_MESSAGE = `(= =) じーーーー`;

11

    const COME_BACK_MESSAGE = `come back!`;

12

    const MATCH_RULES = [

13

        MatchRule({

14

            begin_with_keyword: ['hi mei', 'Hi Mei', 'hi Mei', 'Hi mei', 'Hello Mei', 'hello Mei', 'hello mei'],

15

            reply_to_user: {

16

                '花Q': 'mei\'s brain feels glitchy',

17

                

18

                'Ruby': 'Rubeh Rubeh Rubeh!',

19

            },

20

            default_reply: 'has no eyebrows!'

21

        }),

22

​

23

        MatchRule({

24

            include_keyword: 'hello',

25

            reply_to_user: {

26

                '鳴 「Mei」': 'soup!',

27

            },

28

            default_reply: 'has no eyebrows!'

29

        }),

30

​

31

      MatchRule({

32

            end_with_keyword: ['poke', 'pokes'],

33

            reply_to_user: {

34

                '1%': 'rebooting...',

35

            },

36

            default_reply: 'mei will bite you!'

37

        }),

38

​

39

​

40

        MatchRule({

41

            end_with_keyword: 'bye',

42

            default_reply: 'bye!'

43

        }),

44

                

45

        //fetches weather info for minnesota from noaa

46

        MatchRule({

47

            include_keyword: 'q!weather',

48

            default_reply: ['Today: Scattered clouds, with a high around 60. Northeast wind around 10 mph slowing toward evening. Tonight: Partly cloudy, with a low around 48. Northeast wind around 5 mph becoming calm after midnight. Tomorrow: Mostly sunny, with a high near 72. Calm wind becoming east around 5 mph in the afternoon. Tomorrow Night: Partly cloudy, with a low around 51. East wind around 5 mph becoming calm after midnight.']

49

        }),

50

            

51

        //pairs two users in the chat

52

            MatchRule({

53

            include_keyword: 'q!ship',

54

            default_reply: 'mei hasnt gotten a marriage license yet D:'

55

        }),

56

        

57

        //displays random whole number between 0001 and 9999

58

            MatchRule({

59

            include_keyword: 'q!roll',

60

            default_reply: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']

61

        }),

62

        

63

        //fetches horoscope

64

            MatchRule({

65

            include_keyword: 'q!fortune <zodiac>',

66

            default_reply: 'zodiac not yet available >~<'

67

        }),

68

        

