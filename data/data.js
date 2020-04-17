// quests[0].choices[0].description; ==> 'negotiate with them'
//  should this be const questData = instead of monsters?

const kingKoopa = {
    id: 'kingKoopa',
    title: 'King Koopa ',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'https://i.pinimg.com/originals/de/6c/58/de6c580e973effceb02789c68551344a.gif.jpg',
    description: `
        You enter the quest chamber only to be confronted by King Koopa! And he looks angry! What do you do?
    `,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate terms of peace',
        result: `
            Knowing the Koopa isn't too bright, you offer active peaceful solutions confusing the enemy! They give you 35 gold for your good nature
            that will never be delivered. As is the way of negotiation. 
        `,
        hp: 0,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fight me bro!',
        result: `
            You fight the evil King Koopa and take him out! The bad news is you take 30 hp damage. The good news is you
            find 50 gold!
        `,
        hp: -30,
        gold: 50
    }, {
        id: 'run',
        description: 'Run away cause your not ready for this!',
        result: `
            As you make a dash for the door like a coward and Koopa swipes at you
            causing 50 hp damage.
        `,
        hp: -50,
        gold: 0
    }]
};
const passForTheWin = {
    id: 'passForTheWin',
    title: 'Turning the corner, here is your chance!',
    map: {
        top: '57%',
        left: '67%'
    },
    image: 'https://media.giphy.com/media/qfBrXyuWoNXIQ/giphy.gif',
    description: `
        You're nearly at the end of your journey! You see an opening around the curb and have a chance to pass your opponent for the win! What do you do?
    `,
    choices: [{
        id: 'run',
        description: 'Run away cause your not ready for this!',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded your cart wheel on your
            way out of town and take 40 hp damage. 
        `,
        hp: -35,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fight me bro!',
        result: `
            You attempt to take the lead on the turn when your opponent sees you approach
            and let's loose a red seeking shell! You wake up the next morning, amongst your own cart wrecked.
            You take 45 hp damage.
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'negotiate',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `Knowing the opponent isn't too bright, you offer active peaceful solutions confusing the enemy! They give you 90 gold for your good nature
        that allows everyone to move along undisturbed. As is the way of negotiation.
        `,
        hp: 0,
        gold: 90
    }]
};
const questionBlock = {
    id: 'question',
    title: 'The Floating Question Block',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'https://media1.tenor.com/images/4f39a9fae20bdf0a109d09ea39756335/tenor.gif?itemid=13312514',
    description: `
        As go along your journey, you come upon 3 floating blocks with question marks!
        Just as you start to imagine what could be hidden within such remarkable things, you see a mushroom monster heading your way! You'll need to make a run for it,
        but you only have time to inspect one of them! Which one 
        do you choose?
    `,
    choices: [{
        id: 'question1',
        description: 'Mysterious question block one!',
        result: 'You grab 40 gold coins!',
        hp: 0,
        gold: 40
    }, {
        id: 'question2',
        description: 'Mysterious question block two!',
        result: 'Oh no! The question block was empty and you take 50 hp damage trying to get to it!',
        hp: -50,
        gold: 0
    }, {
        id: 'question3',
        description: 'Mysterious question block three!',
        result: 'You come upon a power up and you gain 35 hp!',
        hp: 35,
        gold: 0
    }]
};
const quests = [
    kingKoopa, 
    questionBlock,
    passForTheWin, {
        id: 'pleasure',
        title: 'The Bold Folding Pleasure',
        map: {
            top: '61%',
            left: '10%'
        },
        image: 'treasure-chests.png',
        description: `
        At last you come upon another set of 3 floating blocks with question marks!
        Just as you start to imagine what could be hidden within such remarkable things.Which one 
        do you choose?
    `,
        choices: [{
            id: 'box1',
            description: 'WOW',
            result: 'You grab 40 gold coins!',
            hp: 0,
            gold: 40
        }, {
            id: 'box2',
            description: 'NOW',
            result: 'Oh no! The floatin question mark was empty and drained you 50 hp! What a waste of energy!',
            hp: -50,
            gold: 0
        }, {
            id: 'box3',
            description: 'POW',
            result: 'A warm light engulfs you as you power up and you gain 35 hp!',
            hp: 35,
            gold: 0
        }
        ]
    }
];
export default quests;