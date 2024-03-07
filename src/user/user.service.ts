import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Address } from './entities/address.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Address) private addressRepo: Repository<Address>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password, name, gender, address } = createUserDto;

    // const dataAdress = this.addressRepo.create(address);
    // const result = await this.addressRepo.save(dataAdress);
    // console.log('result', result);

    // const newUser = {
    //   email,
    //   password,
    //   name,
    //   gender,
    //   address: result.address_id,
    // };

    // const data = this.userRepo.create(newUser);
    let user = new User({
      ...createUserDto,
    });

    this.userRepo.save(user);
    console.log(user);
    // console.log('aaa', data);
    // this.userRepo.save(data);

    return 'This action adds a new user';
  }

  findAll() {
    return this.userRepo.find({
      relations: {
        address: true,
      },
    });
  }

  findOne(id: number) {
    return this.userRepo.findOne({
      where: { user_id: id },
      relations: {
        address: true,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
