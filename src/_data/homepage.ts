/**
 * HomeImage is the image at the top of the home screen
 * HomeLogo is the image in the middle of the HomeImage
 * HomeInfo is the info just below the HomeImage
 * In HomeInfo the title is the larger text at the top and the info is the smaller text underneath
 * Info injected as html so if text must be bold or italics use html elements within info
 * MeetingTimes is an object holding the meeting time information displayed at the bottom of the home page
 * A meeting time object has a day, time building, and room
 * The calendar on this page is updated from the microsoft calendar on the teams microsoft accound
 */

export const HomeImage = 'assets/_images/homepage/16car.JPG';
export const HomeLogo = 'assets/_images/homepage/wmu.png';

export const HomeInfo = {
    title: 'Who are we?',
    info: 'We are a team of students from Western Michigan University in Kalamazoo, Michigan. We design, build, and race solar powered vehicles in the American Solar Challenge. Curious to know more? Read about our history and mission on the about us page.'
};

export const MeetingTimes = {
    semester: 'Spring Semester 2019',
    general: {
        day: 'Wednesdays',
        time: '6:00 P.M.',
        building: 'Parkview',
        room: 'E-101'
    },
    mechanical: {
        day: 'Mondays',
        time: '5:30 P.M.',
        building: 'Parkview',
        room: 'E-101'
    },
    cs: {
        day: null,
        time: '7:00 P.M.',
        building: 'Parkview',
        room: 'E-101'
    },
    business: {
        day: 'Tuesday',
        time: '6:00 P.M.',
        building: 'Parkview',
        room: 'E-101'
    },
    electrical: {
        battery: {
            day: 'Mondays',
            time: '6:00 P.M.',
            building: 'Parkview',
            room: 'A-216'
        },
        solar: {
            day: 'Mondays',
            time: '6:00 P.M.',
            building: 'Parkview',
            room: 'A-216'
        },
        pcb: {
            day: 'Thursdays',
            time: '6:00 P.M.',
            building: 'Parkview',
            room: 'A-216'
        }
    }
};
