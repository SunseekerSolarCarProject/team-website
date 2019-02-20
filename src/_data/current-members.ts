/**
 * CurrentHeaderImage is the picture that shows at the top of the page
 * CurrentPageTitle is the white text in the middle of the picture
 * Current members is an object containing data of the current members of the team
 * The e-board positions have their own objects, all other members are placed in the members array
 * Advisors are in the advisor array
 * Members will be rendered in the order they are written
 * Please keep the members array in alphabetical order by last name
 * All member object have picture, name, linkedin, and funnyPic fields
 * Members in the members array also have a subteam field
 * All pictures should be in the assets/_images/team-members/team directory
 * Pictures should be 400x500 pixels
 * If there is no linkedin or funnyPic leave those fileds null
 * If a member does not have a picture yet use assets/_images/team-members/no-picture.png
 * FunnyPic should be stored in the assets/_images/team-members/funny directory
 * To access a funnyPic on the website type 'solar' while on the team page
 */

export const CurrentHeaderImage = 'assets/_images/team-members/team/team-picture.JPG';
export const CurrentPageTitle = 'Our Team';

export const CurrentMembers = {
    lead: {
        picture: 'assets/_images/team-members/team/kyle_lyman.jpg',
        name: 'Kyle Lyman',
        title: 'Project Lead',
        linkedin: null,
        funnyPic: 'assets/_images/team-members/funny/kyle_lyman.png'
    },
    assistant: {
        picture: 'assets/_images/team-members/team/regan_thorpe.png',
        name: 'Regan Thorpe',
        title: 'Assistant Project Lead',
        linkedin: 'https://www.linkedin.com/in/regan-thorpe/',
        funnyPic: null
    },
    mechanical: {
        picture: 'assets/_images/team-members/team/nicholas_patzer.jpg',
        name: 'Nick Patzer',
        title: 'Mechanical Lead',
        linkedin: null,
        funnyPic: null
    },
    electrical: {
        picture: 'assets/_images/team-members/team/austin_gilbert.jpg',
        name: 'Austin Gilbert',
        title: 'Electrical Lead',
        linkedin: 'https://www.linkedin.com/in/austin-gilbert-0077a9143/',
        funnyPic: 'assets/_images/team-members/funny/austin_gilbert.png'
    },
    aero: {
        picture: 'assets/_images/team-members/team/alex_brunk.png',
        name: 'Alex Brunk',
        title: 'Aero Lead',
        linkedin: 'https://www.linkedin.com/pub/alex-brunk/108/163/941',
        funnyPic: 'assets/_images/team-members/funny/alex_brunk.png'
    },
    webmaster: {
        picture: 'assets/_images/team-members/team/justin_true.jpg',
        name: 'Justin True',
        title: 'Webmaster',
        linkedin: 'https://www.linkedin.com/in/justin-true-b42404156/',
        funnyPic: 'assets/_images/team-members/funny/justin_true.png'
    },
    business: {
        picture: null,
        name: null,
        title: 'Business Lead',
        linkedin: null,
        funnyPic: null
    },
    members: [
        {
            picture: 'assets/_images/team-members/team/unknown.png',
            name: 'Will Barringer',
            title: 'Battery Captain',
            linkedin: null,
            funnyPic: null
        },
        {
            picture: 'assets/_images/team-members/team/colin_haynes.png',
            name: 'Colin Haynes',
            title: 'Mechanical',
            linkedin: 'https://www.linkedin.com/in/colin-haynes-85236114a/',
            funnyPic: null
        },
        {
            picture: 'assets/_images/team-members/team/unknown.png',
            name: 'Erik Larson',
            title: 'Solar Captain',
            linkedin: null,
            funnyPic: null
        },
        {
            picture: 'assets/_images/team-members/team/unknown.png',
            name: 'Abby Macchiarolo',
            title: 'Buisness',
            linkedin: null,
            funnyPic: null
        },
        {
            picture: 'assets/_images/team-members/team/unknown.png',
            name: 'Andrew Mccabe',
            title: 'Battery Team',
            linkedin: null,
            funnyPic: null
        },
        {
            picture: 'assets/_images/team-members/team/unknown.png',
            name: 'Derrick Oldenkamp',
            title: 'PCB Captain',
            linkedin: null,
            funnyPic: null
        },
        {
            picture: 'assets/_images/team-members/team/unknown.png',
            name: 'Katy Ross',
            title: 'Solar Captain',
            linkedin: null,
            funnyPic: null
        },
        {
            picture: 'assets/_images/team-members/team/unknown.png',
            name: 'Britton Williams',
            title: 'Solar Team',
            linkedin: null,
            funnyPic: null
        },
        {
            picture: 'assets/_images/team-members/team/unknown.png',
            name: 'Alysia Zimmerman',
            title: 'Solar Captain',
            linkedin: null,
            funnyPic: null
        },
        {
            picture: 'assets/_images/team-members/team/unknown.png',
            name: 'Courtney York',
            subteam: 'Buisness',
            linkedin: null,
            funnyPic: null
        }
    ],
    advisors: [
        {
            picture: 'assets/_images/team-members/team/bradley_bazuin.jpg',
            name: 'Bradley Baauin',
            title: 'Faculty Advisor Electrical Engineering',
            linkedin: null,
            funnyPic: null
        },
        {
            picture: 'assets/_images/team-members/team/mitchel_keil.png',
            name: 'Mitchel Keil',
            title: 'Faculty Advisor EDMMS',
            linkedin: null,
            funnyPic: 'assets/_images/team-members/funny/mitchel_keil.png'
        }
    ]

};
