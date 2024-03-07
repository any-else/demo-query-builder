import { User } from './user.entity';
export declare class Address {
    address_id: number;
    number: number;
    street: string;
    district: string;
    city: string;
    zipcode: number;
    user: User;
}
