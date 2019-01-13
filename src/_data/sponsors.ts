/**
 * The SponsorImage is the image on the top of the sponsor page
 * Sponsors is an object containing all current sponsors
 * It is broken up into tiers of sponsorship
 * Platinum, gold, silver, bronze, individual, and trailer
 * Our donate page has descriptions of what each tier gets on our website
 * The most a sponsor can have is a logo, link, title(company name), location, and description
 * The least they can have is a logo, title(company name), and location
 * If link is not put an company pleas make the link field '#' so the site knows one was not put
 * PastSponsors is an object holding information of past sponsors
 * It too is seperated but with diffrent categories
 * Platinum, gold, silver, bronze, bronco, and solarcell
 * These companies only get a title(company name) and a link
 * All logos should be in the assets/_images/sponsors directory
 */

export const SponsorImage = 'assets/_images/sponsors/parks.JPG';

export const Sponsors = {
    platinum: [
        {
            logo: 'assets/_images/sponsors/anderson.jpg',
            link: 'http://www.andersonglobal.com',
            title: 'Anderson Global',
            location: 'Muskegon Heights, MI',
            description: 'Anderson Global began as Anderson Pattern 75 years ago '
            + 'developing complex tooling for high volume casting for foundries and '
            + 'manufacturers. Today, they are global tooling manufacturer providing '
            + 'tooling design, engineering, and production services. They combine an '
            + 'extraordinary continuity of tooling experience with cutting-edge technology, '
            + 'automation, and innovation with a global approach to business.'
        },
        {
            logo: 'assets/_images/sponsors/consumers_energy.png',
            link: 'https://www.consumersenergy.com/default.aspx',
            title: 'Consumers Energy',
            location: 'Jakson, MI',
            description: 'Consumers Energy is one of the nation\'s largest combination utilities, providing electric and natural gas service to nearly 6.6 million of Michigan\'s 10 million residents, in all 68 Lower Peninsula counties.<br>'
            + 'Their Growing Forward strategy calls for investing more than $6 billion in Michigan over the next five years. That includes significant investments in energy efficiency, renewable energy, environmental and customer service enhancements, and new power generation.'
        },
        {
            logo: 'assets/_images/sponsors/denso.png',
            link: 'http://www.densocorp-na.com/',
            title: 'Denso Manufacturing',
            location: 'Battle Creek, MI',
            description: 'DENSO Manufacturing Michigan, Inc. (DMMI) in Battle Creek is the lead production facility for DENSO’s Thermal Systems North American Center (TAC), focusing on the manufacture of automotive air conditioning and engine cooling components and systems. The Battle Creek campus comprises more than 1,380,000 square feet of manufacturing, warehouse and administrative floor space in 6 buildings on over 100 acres of land, and is the largest facility in Fort Custer Industrial Park.'
        },
        {
            logo: 'assets/_images/sponsors/eaton.jpg',
            link: 'http://www.eaton.com/Eaton/index.htm',
            title: 'Eaton',
            location: 'Galesburg, MI',
            description: 'Eaton is a power management company with 2015 sales of $20.9 billion. Eaton provides energy-efficient solutions that help their customers effectively manage electrical, hydraulic and mechanical power more efficiently, safely and sustainably. Eaton has approximately 95,000 employees and sells products to customers in more than 175 countries.'
        },
        {
            logo: 'assets/_images/sponsors/hexcel.png',
            link: 'http://www.hexcel.com/',
            title: 'Hexcel',
            location: 'Stamford, MI',
            description: 'Hexcel today offers a breadth and depth of products and services that is unmatched in the industry. From their worldwide manufacturing facilities we manufacture the full spectrum of advanced material solutions - this includes everything from carbon fiber and reinforcement fabrics to pre-impregnated materials (or "prepregs") and honeycomb core, tooling materials and finished aircraft structures.'
        },
        {
            logo: 'assets/_images/sponsors/NSK.jpg',
            link: 'http://www.nskamericas.com/cps/rde/xchg/na_en/hs.xsl/index.html',
            title: 'NSK Americas',
            location: 'Ann Arbor, MI',
            description: 'NSK is a global supplier of roller bearings, ball bearings, linear motion and automotive components with domestic and overseas manufacturing capabilities. Product offerings include a full range of ball & roller bearings, mounted units, linear guides, ball screws, actuators, Cartesian robots, direct-drive motors and ball screw support bearings. Bearing types include deep groove, angular contact, self-aligning, thrust, cylindrical, spherical, tapered and needle. NSK also offers a full range of services including reconditioning, ball screw repair, product integration, application engineering and predictive & preventive reliability maintenance services.'
        },
        {
            logo: 'assets/_images/sponsors/autoair.png',
            link: 'http://www.pw.utc.com/AutoAir',
            title: 'Pratt & Whitney AutoAir',
            location: 'Lansong, MI',
            description: 'Pratt & Whitney AutoAir is the center of excellence for nacelle composite repairs. The facility provides overhaul and repair services for a broad range of composites parts. It is also a market leader in the design and manufacturing of engine test equipment. The facility has over 159,000 square feet of floor space and an experienced team of employees ready to serve your needs. Their key products include composite and metal bonded parts, thrust reversers, nacelle components, test equipment, and shrouds.'
        },
        {
            logo: 'assets/_images/sponsors/vans_pattern.gif',
            link: 'http://www.vanspattern.com/',
            title: 'Van\'s Pattern',
            location: 'Grand Rapids, MI',
            description: 'Van\'s Pattern Corp. occupies a modern 40,000 sq. ft. facility in downtown Grand Rapids, Michigan. Started in 1960 by Ebel Vander Molen, and now owned by his son Dan Vander Molen since 1980, Van\'s is proud of its family heritage. Remaining flexible and pushing the envelope of pattern technology has propelled Van\'s to become a national leader in the manufacture of polystyrene patterns. Modern CNC milling machines, guided by their state of the art CAD/CAM department, deliver an accurate, quality product to their customers with astounding speed. Their experienced patternmakers and finishers then add the legendary Van\'s quality touch by hand crafting the pattern to meet and exceed your expectations.'
        },
        {
            logo: 'assets/_images/sponsors/wesustain.jpg',
            link: 'https://wmich.edu/sustainability',
            title: 'Office for Sustainability',
            location: 'Kalamazoo, MI',
            description: 'The mission of the Office for Sustainability is to guide and assist the Western Michigan University community in fulfilling and growing its sustainability commitments. Through building a diverse and flourishing learning community around sustainability, we will continually explore and develop new opportunities to create a culture of sustainability and improve quality of life for all.'
        }
    ],
    gold: [
        {
            logo: 'assets/_images/sponsors/wmu.png',
            link: 'https://wmich.edu/engineer',
            title: 'College of Engineering and Applied Sciences',
            location: 'Kalamazoo, MI',
            description: 'Western Michigan University’s College of Engineering and Applied Sciences is located at the heart of the University’s Parkview Campus in Floyd Hall. The 343,000-square-foot facility was completed in the fall of 2003. The $100 million high-tech academic facility is the University’s largest. The faculty, advisers and staff are dedicated to having you receive the best education possible by getting you involved in activities starting with your freshman year. We will keep you informed of the top trends in the engineering industry, teach you how to interact and compete in a global market, and inspire you to reach for new solutions.'
        },
        {
            logo: 'assets/_images/sponsors/fsi.png',
            link: 'http://www.formedsolutions.com/',
            title: 'Formed Solutions, Inc.',
            location: 'Holland, MI',
            description: 'The FSI Team offers you the combined resources of having studied, trained, worked, and lived in virtually every aspect of the vacuum formed plastics industry. From sales and engineering to process selection, tooling design, thermoforming production and logistics. This combined experience contributes to work flow efficiency, repetitive formed product quality and solid customer satisfaction.'
        }
    ],
    silver: [
        {
            logo: 'assets/_images/sponsors/3M.png',
            link: 'http://www.3m.com/3M/en_US/company-us/',
            title: '3M',
            location: 'St. Paul, Minnesota',
            description: ''
        },
        {
            logo: 'assets/_images/sponsors/fox.jpg',
            link: 'https://www.ridefox.com/',
            title: 'Fox Factory',
            location: 'Scotts Valley, Ca',
            description: ''
        },
        {
            logo: 'assets/_images/sponsors/harbor_freight.png',
            link: 'https://www.harborfreight.com/#',
            title: 'Harbor Freight #265',
            location: 'Kalamazoo, Mi',
            description: ''
        },
        {
            logo: 'assets/_images/sponsors/jetco.png',
            link: 'hhttp://www.jetcosigns.com/ttp://www.3m.com/3M/en_US/company-us/',
            title: 'JETCO Signs',
            location: 'Battle Creek, Mi',
            description: ''
        },
        {
            logo: 'assets/_images/sponsors/kalamazoo_waterjet.png',
            link: 'http://www.consort.com/kalamazoowaterjet/',
            title: 'Kalamazoo Waterjet',
            location: 'Kalamazoo, Mi',
            description: ''
        },
        {
            logo: 'assets/_images/sponsors/morse.png',
            link: 'http://www.morsecuttingtools.com/cgi/CGP2HOME',
            title: 'Morse Cutting Tools',
            location: 'Madison Heights, Mi',
            description: ''
        },
        {
            logo: 'assets/_images/sponsors/textreme.png',
            link: 'http://www.textreme.com/',
            title: 'Textreme',
            location: 'Borås, Sweden',
            description: ''
        }
    ],
    bronze: [
        {
            logo: 'assets/_images/sponsors/Coast_Fabrication_Inc.png',
            link: '#',
            title: 'Coast Fabrication Inc.',
            location: 'Huntington Beach, Ca',
            description: ''
        },
        {
            logo: 'assets/_images/sponsors/fralock.jpg',
            link: '#',
            title: 'Fralock',
            location: 'Valencia, Ca',
            description: ''
        },
        {
            logo: 'assets/_images/sponsors/kendall.png',
            link: '#',
            title: 'The Kendall Group',
            location: 'Portage, Mi',
            description: ''
        },
        {
            logo: 'assets/_images/sponsors/lowes.jpg',
            link: '#',
            title: 'Lowe\'s Home Improvement #1829',
            location: 'Gurnee, Illinois',
            description: ''
        },
        {
            logo: 'assets/_images/sponsors/permabond.jpg',
            link: '#',
            title: 'Permabond',
            location: 'Pottstown, Pa',
            description: ''
        },
        {
            logo: 'assets/_images/sponsors/stryker.png',
            link: '#',
            title: 'Stryker Instruments',
            location: 'Portage, Mi',
            description: ''
        },
        {
            logo: 'assets/_images/sponsors/sweet_mfg.png',
            link: '#',
            title: 'Sweet Manufacturing, Inc.',
            location: 'Kalamazoo, Mi',
            description: ''
        }
    ],
    individual: [
        {
            logo: 'assets/_images/sponsors/abrahampoot.jpg',
            link: 'http://www.mywmu.com/s/1428/gid2/social.aspx?sid=1428&gid=2&sitebuilder=1&pgid=2553&sparam=abraham%20poot&scontid=0',
            title: 'Abraham Poot - Memorial Fund',
            location: null,
            description: null
        }
    ],
    trailer: [
        'Alec Carpenter',
        'Robert Galman',
        'Bryan Harris',
        'Tom Harris',
        'Karen Haubert',
        'Cameron Knight',
        'Joel Thompson',
        'Phil Vorgias'
    ]
};

export const PastSponsors = {
    platinum: [
        {
            title: 'ChemLink',
            link: 'http://www.chemlink.com/'
        },
        {
            title: 'Entergy',
            link: 'http://www.entergy.com/'
        },
        {
            title: 'Balluf',
            link: 'http://www.balluff.com/'
        },
        {
            title: 'BridgeStone',
            link: 'http://www.bridgestonetire.com/'
        }
    ],
    gold: [
        {
            title: 'Plascore',
            link: '#'
        },
        {
            title: 'AACOA',
            link: 'http://www.aacoa.com/'
        },
        {
            title: 'SolidWorks',
            link: 'http://www.solidworks.com/'
        },
        {
            title: 'The MathWorks',
            link: 'http://www.mathworks.com/'
        }
    ],
    silver: [
        {
            title: 'Intergrated CAD/CAM Technologies Inc.',
            link: 'http://icctech.com/'
        },
        {
            title: 'FirePro Graphics',
            link: 'http://www.fireprographics.com/'
        },
        {
            title: 'Mr. Robert R. Corrion and Mrs. Rhea B. Corrion',
            link: '#'
        }
    ],
    bronze: [
        {
            title: 'American Defense Composites',
            link: '#'
        },
        {
            title: 'Parker Pneumatics Division',
            link: '#'
        },
        {
            title: 'Ridge & Kramer Auto Parts',
            link: '#'
        },
        {
            title: 'SolarSphereOnline.com',
            link: 'http://www.spheralsolar.com/'
        },
        {
            title: 'INNegRITY',
            link: 'http://www.innegrity.com/index.php'
        },
        {
            title: 'CYBORG Textiles',
            link: 'http://www.cyborgtextiles.com/'
        },
        {
            title: 'Hydro',
            link: 'http://www.hydro.com/en/'
        },
        {
            title: 'SC Enterprises',
            link: 'http://www.scenterprisesfiberglass.com/'
        },
        {
            title: 'Mrs. Kathleen Marie Rinker and Mr. Lowell P. Rinker',
            link: '#'
        },
        {
            title: 'AVB Construction, LLC',
            link: '#'
        },
        {
            title: 'Mr. Richard E. Burton and Mrs. Shelby Burton',
            link: '#'
        },
        {
            title: 'Dr. John M. Dunn and Mrs. Linda T. Dunn',
            link: '#'
        },
        {
            title: 'Mr. Roger C. Henry and Mrs. Cheryl Henry',
            link: '#'
        },
        {
            title: 'Pharmacia Foundation',
            link: '#'
        },
        {
            title: 'Ms. Ronda E. Stryker and Mr. William D. Johnston',
            link: '#'
        }
    ],
    bronco: [
        {
            title: 'esigns.com',
            link: 'http://www.esigns.com/'
        },
        {
            title: 'The Reeves Law Group',
            link: 'http://www.robertreeveslaw.com/'
        },
        {
            title: 'Andy\'s Auto Sport',
            link: 'http://www.andysautosport.com/'
        },
        {
            title: 'Mr. Robert Reeves',
            link: '#'
        },
        {
            title: 'Andrew J. Oman',
            link: '#'
        },
        {
            title: 'Abraham and Colleen Poot',
            link: '#'
        },
        {
            title: 'Kapenga-Woodin Family Trust',
            link: '#'
        },
        {
            title: 'Mr. Don Lee Loveless',
            link: '#'
        },
        {
            title: 'Dr. Edmund Tsang',
            link: '#'
        },
        {
            title: 'Dr. Molly W. Williams and Dr. Roger G. Williams',
            link: '#'
        },
        {
            title: 'Dr. Karen E. Woodin',
            link: '#'
        }
    ],
    solarcell: [
        {
            title: 'Cash for Cars',
            link: 'http://cashforcarssandiego.com/'
        },
        {
            title: 'Natalie Cordeiro',
            link: 'http://www.sr22insurance.net/'
        },
        {
            title: 'Moose Utility Division',
            link: '#'
        },
        {
            title: 'AAUP, WMU Chapter',
            link: '#'
        },
        {
            title: 'Dr. Osama Abudayyeh',
            link: '#'
        },
        {
            title: 'Administrative Professional Association',
            link: '#'
        },
        {
            title: 'Antoniotti Chiropractic Office',
            link: '#'
        },
        {
            title: 'Mr. Eugene J. Asken and Mrs. Evie Asken',
            link: '#'
        },
        {
            title: 'Mrs. Debbie Bailey and Mr. Frederick J. Bailey',
            link: '#'
        },
        {
            title: 'Ms. Kate A. Barnes',
            link: '#'
        },
        {
            title: 'Dr. Harold L. Bate and Mrs. Sherry Bate',
            link: '#'
        },
        {
            title: 'Mr. Robert M. Beam and Mrs. Judith K. Beam',
            link: '#'
        },
        {
            title: 'Mr. Richard A. Beauregard and Mrs. Kathy B. Beauregard',
            link: '#'
        },
        {
            title: 'Mr. Bud Bender and Ms. Ruth E. Friar',
            link: '#'
        },
        {
            title: 'Mr. John F. Bergin',
            link: '#'
        },
        {
            title: 'Mr. Nicholas Beute and Mrs. Susan J. Beute',
            link: '#'
        },
        {
            title: 'Ms. Doreen Brinson',
            link: '#'
        },
        {
            title: 'Ms. Christine T. Byrnes',
            link: '#'
        },
        {
            title: 'Catholic Family Services-Board and Staff',
            link: '#'
        },
        {
            title: 'Mr. Ralph L. Clayson, III',
            link: '#'
        },
        {
            title: 'Mr. H. Kenneth Cole	and Mrs. Brenda A. Cole',
            link: '#'
        },
        {
            title: 'Mr. Scot R. Conant and Mrs. Keri Anne Conant',
            link: '#'
        },
        {
            title: 'Mr. Todd Kenyon Coon and Mrs. Stephanie K. Coon',
            link: '#'
        },
        {
            title: 'Mr. J. Craig DeNooyer and Mrs. Sarah L. DeNooyer',
            link: '#'
        },
        {
            title: 'Mrs. Janice M. DiGiovanni',
            link: '#'
        },
        {
            title: 'Mr. Michael M. Doxey',
            link: '#'
        },
        {
            title: 'Mr. Richard Duffett	and Mrs. Constance Duffett',
            link: '#'
        },
        {
            title: 'Mr. Jeffery S. Eckert and Mrs. Susan Eckert',
            link: '#'
        },
        {
            title: 'Lois E. Ellis Trust',
            link: '#'
        },
        {
            title: 'Mr. Wil B. Emmert and Mrs. Eloise Emmert',
            link: '#'
        },
        {
            title: 'Ms. Jenny C. Evans',
            link: '#'
        },
        {
            title: 'Mrs. Amy Farrell and Mr. Bill Farrell',
            link: '#'
        },
        {
            title: 'Mrs. Stephanie M. Fletcher and Mr. Edward J. Fletcher',
            link: '#'
        },
        {
            title: 'Ms. Nina Nelson Fuqua and Dr. R. Wayne Fuqua',
            link: '#'
        },
        {
            title: 'Mr. Jeff A. Gardner	and Mrs. Kitty E. Gardner',
            link: '#'
        },
        {
            title: 'Ms. Elaine K. Gaudio',
            link: '#'
        },
        {
            title: 'The Gerber Foundation',
            link: '#'
        },
        {
            title: 'Irving S. Gilmore Foundation',
            link: '#'
        },
        {
            title: 'Mrs. Diana W. Goes and Mr. L. John Goes, Jr. m',
            link: '#'
        },
        {
            title: 'Dr. Neil Grunberg',
            link: '#'
        },
        {
            title: 'Dr. Bassam E. Harik	and Mrs. Veronica Hart Harik',
            link: '#'
        },
        {
            title: 'Mr. Robert L. Hegel	and Mrs. Margaret P. Hegel',
            link: '#'
        },
        {
            title: 'Dr. Edward J. Heinig and Dr. Ruth M. Heinig',
            link: '#'
        },
        {
            title: 'Friends of Historic East Campus',
            link: '#'
        },
        {
            title: 'Mr. Ronald G. Hoard	and Mrs. Frances Hoard',
            link: '#'
        },
        {
            title: 'Dr. Patricia Marie Holton',
            link: '#'
        },
        {
            title: 'Ms. Lynda L. Hunt',
            link: '#'
        },
        {
            title: 'Mr. Stephen C. Hunt',
            link: '#'
        },
        {
            title: 'Ms. Carol L. J. Hustoles and Mr. Thomas P. Hustoles',
            link: '#'
        },
        {
            title: 'Dr. John Allen Jellies and Mrs. Brenda Jellies',
            link: '#'
        },
        {
            title: 'Mr. Paul J. Kaczanowski	and Mrs. Lucy M. Kaczanowski',
            link: '#'
        },
        {
            title: 'Kalamazoo County Health Plan Corporation',
            link: '#'
        },
        {
            title: 'Mrs. Tonia S. Kalleward',
            link: '#'
        },
        {
            title: 'Ms. Gail Kelsey',
            link: '#'
        },
        {
            title: 'Mrs. Joan M. Knorr',
            link: '#'
        },
        {
            title: 'Mr. Kevin A. Knutson and Mrs. Lisa J. Knutson',
            link: '#'
        },
        {
            title: 'Mrs. Jane E. Kramer	and Dr. Ronald C. Kramer',
            link: '#'
        },
        {
            title: 'Mrs. Gail Anderson Kurtz and Mr. James C. Kurtz',
            link: '#'
        },
        {
            title: 'John Patrick Lennon Trust',
            link: '#'
        },
        {
            title: 'Mr. Daniel L. Livingston',
            link: '#'
        },
        {
            title: 'Mr. Gregory B. Lozeau and Ms. Katherine G. Lozeau',
            link: '#'
        },
        {
            title: 'Dr. Jack Luderer and Mrs. Monica O. Luderer',
            link: '#'
        },
        {
            title: 'Mr. Conn L. Macomber and Mrs. Sheri Lee Macomber',
            link: '#'
        },
        {
            title: 'Ms. Michele C. McLaughlin',
            link: '#'
        },
        {
            title: 'Michigan Universities Self Insurance Corporation',
            link: '#'
        },
        {
            title: 'Mr. James E. Mort and Mrs. Judy A. Mort',
            link: '#'
        },
        {
            title: 'Mrs. Carole R. Nelson',
            link: '#'
        },
        {
            title: 'Mr. Charles L. Nelson',
            link: '#'
        },
        {
            title: 'Mrs. Joan E. O\'Bryan',
            link: '#'
        },
        {
            title: 'Office of the Provost Staff',
            link: '#'
        },
        {
            title: 'Mr. Floyd L. Parks and Mrs. Phyllis E. Parks',
            link: '#'
        },
        {
            title: 'Mrs. Joyce A. Parsons and Mr. D. Edward Parsons',
            link: '#'
        },
        {
            title: 'Ms. Elisabeth Patino and Mr. John W. Nichols',
            link: '#'
        },
        {
            title: 'Mrs. Bobbi Pearson and Mr. Ken Pearson',
            link: '#'
        },
        {
            title: 'Mr. Theodore J. Petropoulos	and Mrs. Joanne E. Petropoulo',
            link: '#'
        },
        {
            title: 'Pfizer Foundation',
            link: '#'
        },
        {
            title: 'Mr. Thomas Ponto and Mrs. Susan Nicks Ponto',
            link: '#'
        },
        {
            title: 'Mrs. Linda L. Powell and Mr. R. Thomas Powell',
            link: '#'
        },
        {
            title: 'PSSO Board Members',
            link: '#'
        },
        {
            title: 'Mrs. Patricia A. Resetar and Mr. Mark A. Resetar',
            link: '#'
        },
        {
            title: 'Dr. Jack M. Ruhl and Mrs. Diane C. Ruhl',
            link: '#'
        },
        {
            title: 'Schaper Family Trust',
            link: '#'
        },
        {
            title: 'Mr. Richard K. Schaper and Mrs. Karen Schaper',
            link: '#'
        },
        {
            title: 'J. Peter Schma, CLU',
            link: '#'
        },
        {
            title: 'Mrs. Kristi L. Schutter	and Mr. James J. Schutter, Jr.',
            link: '#'
        },
        {
            title: 'Mrs. Barbara S. Schwemmin and Mr. Gerald C. Schwemmin',
            link: '#'
        },
        {
            title: 'Mr. Edward Lewis Shepard and Mrs. Suzanne Shepard',
            link: '#'
        },
        {
            title: 'Dr. Werner Sichel and Mrs. Beatrice Sichel',
            link: '#'
        },
        {
            title: 'Sindecuse Health Center Staff',
            link: '#'
        },
        {
            title: 'Mr. Troy A. Smits and Ms. Hillary Jane Sulla',
            link: '#'
        },
        {
            title: 'Ms. Patricia L. Sonicksen',
            link: '#'
        },
        {
            title: 'Mr. Terry G. Spencer and Mrs. Sandra M. Spencer',
            link: '#'
        },
        {
            title: 'Mr. Robert W. Sprick and Mrs. Charlene M. Sprick',
            link: '#'
        },
        {
            title: 'Mrs. Baiba Z. Stepe',
            link: '#'
        },
        {
            title: 'Mr. Theodore B. Stone and Mrs. Karen S. Stone',
            link: '#'
        },
        {
            title: 'Mrs. Sharon L. Colella Strazdas',
            link: '#'
        },
        {
            title: 'Mr. Gregory A. Taylor and Mrs. Lori Taylor',
            link: '#'
        },
        {
            title: 'Mrs. Pamela E. Thomas',
            link: '#'
        },
        {
            title: 'Mr. Christopher W. Tremblay',
            link: '#'
        },
        {
            title: 'Ms. Jan Van Der Kley and Mr. Michael O. McCauley',
            link: '#'
        },
        {
            title: 'Mrs. Camela S. Vossen',
            link: '#'
        },
        {
            title: 'Ms. Jan C. Walter',
            link: '#'
        },
        {
            title: 'Dr. Earlie M. Washington',
            link: '#'
        },
        {
            title: 'Mr. Robert L. Whaley and Mrs. Judith I. Whaley',
            link: '#'
        },
        {
            title: 'Dr. Verle H. Wiita and Mrs. Trish Wiita',
            link: '#'
        },
        {
            title: 'Mrs. Elaine M. Williams	and Mr. James Allen Williams',
            link: '#'
        },
        {
            title: 'Mr. Frederick Winters and Mrs. Donna Winters',
            link: '#'
        },
        {
            title: 'Mrs. Adele Wise	and Mr. Tom Wise',
            link: '#'
        },
        {
            title: 'Mrs. Eliza S. Wolfe	and Mr. Keene Perry Wolfe',
            link: '#'
        }
    ]
};
