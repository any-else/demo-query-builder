import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { CategoriesEntity } from "../../categories/entity/categories.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  productName: string;

  @Column()
  number: number;

  @ManyToOne(() => CategoriesEntity, (item) => item.product, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "cate_id" })
  categories: CategoriesEntity;
}
