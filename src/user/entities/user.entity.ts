import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Address } from './address.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  gender: boolean;

  @OneToOne(() => Address, (address) => address.user, { cascade: true })
  @JoinColumn()
  address: any;

  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}
