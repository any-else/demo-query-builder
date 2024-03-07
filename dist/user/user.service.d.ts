import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Address } from './entities/address.entity';
export declare class UserService {
    private userRepo;
    private addressRepo;
    constructor(userRepo: Repository<User>, addressRepo: Repository<Address>);
    create(createUserDto: CreateUserDto): Promise<string>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
