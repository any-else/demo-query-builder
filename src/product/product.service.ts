import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>
  ) {}
  create(createProductDto: CreateProductDto) {
    return this.productRepo
      .createQueryBuilder("product")
      .insert()
      .into(Product)
      .values(createProductDto)
      .execute();
  }

  findAll() {
    const res = this.productRepo
      .createQueryBuilder("product")
      .innerJoinAndSelect("product.categories", "categories")
      .getMany();

    /** SELECT * FROM product INNER JOIN categories ON product.cate_id = categories.cate_id */

    return res;
  }

  findOne(id: number) {
    const res = this.productRepo
      .createQueryBuilder("product")
      .innerJoinAndSelect("product.categories", "categories")
      .where("product.id = :id", { id })
      .getOne();
    return res;
    // select * from product inner join categories on product.cate_id = categories.cate_id where product.id = ?
  }

  update(id: number, body: any) {
    const result = this.productRepo
      .createQueryBuilder("product")
      .update(Product)
      .set({
        productName: body.productName,
        number: body.number,
      })
      .where("product.id = :id", { id })
      .execute();
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    const result = this.productRepo
      .createQueryBuilder("product")
      .delete()
      .from(Product)
      .where("product.id = :id", { id })
      .execute();

    return `This action removes a #${id} product`;
  }
}
