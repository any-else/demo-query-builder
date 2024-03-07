import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriesEntity } from "./entity/categories.entity";
import { Repository } from "typeorm";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoriesEntity)
    private categoryRepo: Repository<CategoriesEntity>
  ) {}
  create(data: any) {
    return this.categoryRepo
      .createQueryBuilder("category")
      .insert()
      .into(CategoriesEntity)
      .values(data)
      .execute();

    /**INSERT INTO categories (cate_name) VALUES (?)  */
  }
  remove(id: number) {
    const result = this.categoryRepo
      .createQueryBuilder("categories")
      .delete()
      .from(CategoriesEntity)
      .where("cate_id = :id", { id })
      .execute();

    return `This action removes a #${id} categories`;
  }
}
