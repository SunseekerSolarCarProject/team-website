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
    Priority: number;
}

export interface Member {
    id: string;
    Name: string;
    Current: boolean;
    Position: 'President' | 'Director of Operations' | 'Director of Business' | 'Director of Engineering' | 'Webmaster' | 'Mechanical' | 'Electrical' | 'Business' | 'Operations' | 'Electrical Lead' | 'Mechanical Lead' | 'Advisor' | 'Aero Lead' | 'Driver Lead';
    Picture: Image[];
    FunnyPic: Image[];
    FunnyTitle: string;
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

export interface AirtableResponse {
    records: AirtableRecord[];
}

export interface AirtableRecord {
    id: string;
    createdTime: string;
    fields: any;
}
