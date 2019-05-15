
export interface Address {
    street: string;
    city: string;
    zipcode: string;
}

export interface Employee {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    country: string;
    address: Address;
    phone: string;
    website: string;
    info: string;
    projects: any[];
    hobbies: any[];
    notes: string;
}


