import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from 'typeorm';

import { User } from './user.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  address_id: number;

  @Column()
  number: number;

  @Column()
  street: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  zipcode: number;

  @OneToOne(() => User, (user) => user.address)
  user: User;
}

// {
//   id: 1,
//   email: "rikkei",
//   address: {
//     id: 1,
//     street: "123123"
//   }
// }

// {
//   id: 1,
//   street: "123123",
//   user: {
//     id: 1,
//     email: "rikkei"
//   }
// }
