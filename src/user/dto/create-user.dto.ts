import { IsString, IsBoolean, IsNumber } from 'class-validator';
import { Address } from '../entities/address.entity';

export class CreateUserDto {
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsBoolean()
  gender: boolean;

  address: Address;
}
