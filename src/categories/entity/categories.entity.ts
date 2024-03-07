import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../../product/entities/product.entity";
@Entity({
  name: "categories",
})
export class CategoriesEntity {
  @PrimaryGeneratedColumn()
  cate_id: number;

  @Column({
    type: "varchar",
    nullable: false,
  })
  cate_name: string;

  @OneToMany(() => Product, (item) => item.categories)
  product: Product[];
}
