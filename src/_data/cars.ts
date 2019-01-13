/**
 * CarImage is the picture at the top of the carlist page
 * Carlist is the list of cars and their pictures on the carlist page
 * CarDetails is an object holding all the details of each car
 * An object in the carlist array will have a title and picture
 * Pictures should be stored in the assets/_images/cars directory
 * A CarDetails object must be named the same as the corrosponding title in the carlist array
 * CarDetail object will have a title, picture, description, list of mechanical and electrical specs
 * The mechanical specs are in an array called mechanical and electrical specs are in and array called electrical
 * Each spec has a name and a value
 * If the description is too long you can seperate it onto multiple lines each line after the first must use + to append to the origional string
 */

export const CarImage = 'assets/_images/homepage/sunny-day-at-parkview.png';

export const Carlist = [
    {
        title: 'Farasi',
        picture: 'assets/_images/cars/2016.png'
    },
    {
        title: 'Sunseeker 2010',
        picture: 'assets/_images/cars/2010.jpg'
    },
    {
        title: 'Sunseeker 2005',
        picture: 'assets/_images/cars/2005.jpg'
    },
    {
        title: 'Sunseeker 1995',
        picture: 'assets/_images/cars/1995.jpg'
    }
];

export const CarDetails = {
    Farasi: {
        title: 'Farasi',
        picture: 'assets/_images/cars/banners/2016.png',
        description: 'After a long run with the 2010 car, we have moved on to the next generation. '
        + 'You can find the 2016 car build specifications below',
        mechanical: [
            {
                name: 'Weight with Driver',
                value: '~900lbs'
            },
            {
                name: 'Body and Frame',
                value: 'Carbon Fiber'
            },
            {
                name: 'Suspension',
                value: 'Aluminum Unequal A-Arm'
            },
            {
                name: 'Layout',
                value: 'Four Wheels (RWD)'
            },
            {
                name: 'Rims',
                value: 'Aluminium (Custom)'
            },
            {
                name: 'Tires',
                value: '16" Michelin City Grip'
            }
        ],
        electrical: [
            {
                name: 'Solar Cells',
                value: 'Sunpower C60 (390 total)'
            },
            {
                name: 'Solar Array Area',
                value: '6 m<sup>2</sup> (4 m<sup>2</sup> on car, 2 m<sup>2</sup> supplemental)'
            },
            {
                name: 'Solar Array Output',
                value: '1.34 kW'
            },
            {
                name: 'Battery',
                value: 'Panasonic 18650 Lithium Ion Cells (420 Count)'
            },
            {
                name: 'Motors',
                value: '2 x 6HP CSIRO with stationary axle'
            }
        ]
    },
    Sunseeker2010: {
        title: 'Sunseeker 2010',
        picture: 'assets/_images/cars/banners/2010.jpg',
        description: 'The 2010 car is the most recent solar car produced by the team. It was completed in 2010, and is the primary '
        + 'vehicle used by the team for races and other public events. It has competed in three American Solar Challenge and five '
        + 'Formula Sun Grand Prix races since its debut.'
        + 'The car is not likely to compete in any future races due to its age and new regulations making it more costly to maintain.'
        + '<br>Fast Facts<br>'
        + 'The car is the first three-wheeled design produced by the team.<br>'
        + 'The car is one of only a few three-wheeled designs with two powered wheels.<br>'
        + 'The car is numbered 20 because it was completed for the team\'s 20th anniversary in 2010. '
        + 'All of our other cars are numbered 786; the numbers you would push on a phone\'s numpad to type out "SUN".<br>'
        + 'The car is considered by the State of Michigan, for registration purposes, to be an "Experimental Motorcycle".',
        mechanical: [
            {
                name: 'Weight with Driver',
                value: '781 lb / ~354 kg'
            },
            {
                name: 'Body and Frame',
                value: 'Fiberglass, carbon fiber and Innegra composite with steel roll cage'
            },
            {
                name: 'Front Suspension',
                value: 'Machined aluminium unequal A-arm'
            },
            {
                name: 'Rear Suspension',
                value: 'Steel tube trailing arm'
            },
            {
                name: 'Layout',
                value: 'Three Wheels (2 front, 1 rear, FWD)'
            },
            {
                name: 'Rims',
                value: 'Carbon Fiber (By GHCraft)'
            },
            {
                name: 'Tires',
                value: '14 inch Bridgestone Ecopia'
            }
        ],
        electrical: [
            {
                name: 'Solar Cells',
                value: 'Sunpower A-300 (372 total)'
            },
            {
                name: 'Solar Array Area',
                value: '65 ft<sup>2</sup> / 6 m<sup>2</sup>'
            },
            {
                name: 'Solar Array Output',
                value: '1.2 kW'
            },
            {
                name: 'Battery',
                value: 'Lithium Polymer'
            },
            {
                name: 'Battery Weight',
                value: '44 lb / 20 kg'
            },
            {
                name: 'Motors',
                value: '2 x 6HP CSIRO with stationary axle'
            },
            {
                name: 'Top Speed',
                value: '80 mph / 130 kmh'
            }
        ]
    },
    Sunseeker2005: {
        title: 'Sunseeker 2005',
        picture: 'assets/_images/cars/banners/2005.jpg',
        description: '',
        mechanical: [
            {
                name: 'Weight with Driver',
                value: '496 lb / 225 kg'
            },
            {
                name: 'Body and Frame',
                value: 'Fiberglass and carbon fibe'
            },
            {
                name: 'Front Suspension',
                value: 'Double A-arm'
            },
            {
                name: 'Rear Suspension',
                value: 'Trailing arm'
            },
            {
                name: 'Wheel Configuration',
                value: '4 Wheels (RWD)'
            },
            {
                name: 'Rims',
                value: 'Carbon Fiber (By GHCraft)'
            },
            {
                name: 'Tires',
                value: '14 inch Bridgestone Ecopia'
            }
        ],
        electrical: [
            {
                name: 'Solar Cells',
                value: 'Triple Junction Ga-As'
            },
            {
                name: 'Solar Array Output',
                value: '1250 W'
            },
            {
                name: 'Battery',
                value: 'Lithium Ion'
            },
            {
                name: 'Motors',
                value: '2 x 6 HP CSIRO'
            },
            {
                name: 'Motor Peak Power',
                value: '4.5 kW each'
            }
        ]
    },
    Sunseeker1995: {
        title: 'Sunseeker 1995',
        picture: 'assets/_images/cars/1995.jpg',
        description: '',
        mechanical: [

        ],
        electrical: [

        ]
    }
};
