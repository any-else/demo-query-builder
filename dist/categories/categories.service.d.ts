import { CategoriesEntity } from "./entity/categories.entity";
import { Repository } from "typeorm";
export declare class CategoriesService {
    private categoryRepo;
    constructor(categoryRepo: Repository<CategoriesEntity>);
    create(data: any): Promise<import("typeorm").InsertResult>;
    remove(id: number): string;
}
