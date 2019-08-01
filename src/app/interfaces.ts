export interface Header {
    Page: string;
    Image: Image[];
    Logo: Image[];
    PageTitle: string;
    InfoTitle: string;
    Info: string;
}

export interface Image {
    filename: string;
    size: number;
    thumbnails: any;
    type: string;
    url: string;
}

export interface MeetingTime {
    Team: string;
    Building: string;
    Day: string;
    Room: string;
    Time: string;
}

export interface Member {
    id: string;
    Name: string;
    Current: boolean;
    EBoard: boolean;
    Picture: Image[];
    FunnyPic: Image[];
    Title: string;
    Major: string;
    Quote: string;
    Start: string;
    Bio: string;
    FactTitle: string;
    Fact1: string;
    Fact2: string;
    Fact3: string;
    Instagram: string;
    GitHub: string;
    Twitter: string;
    Facebook: string;
    Linkedin: string;
}

export interface AboutUs {
    Tab: string;
    Title: string;
    Info: string;
}

export interface Car {
    id: string;
    Car: string;
    Description: string;
    Icon: Image;
    Picture: Image;
    Battery: string;
    Motors: string;
    ArrayArea: string;
    ArrayOutput: string;
    SolarCells: string;
    BatteryWeight: string;
    TopSpeed: string;
    BodyFrame: string;
    Suspension: string;
    Layout: string;
    Rims: string;
    Tires: string;
    Weight: string;
    MotorPeak: string;
}

export interface Sponsor {
    id: string;
    Company: string;
    Current: boolean;
    Tier: 'Platinum' | 'Gold' | 'Silver' | 'Bronze' | 'Individual' | 'Trailer';
    Description: string;
    Logo: Image;
    Location: string;
    Link: string;
}
