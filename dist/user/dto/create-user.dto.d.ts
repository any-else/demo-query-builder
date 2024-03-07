import { Address } from '../entities/address.entity';
export declare class CreateUserDto {
    email: string;
    password: string;
    name: string;
    gender: boolean;
    address: Address;
}
