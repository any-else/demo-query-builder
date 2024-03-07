import { CreateProductDto } from "./dto/create-product.dto";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
export declare class ProductService {
    private productRepo;
    constructor(productRepo: Repository<Product>);
    create(createProductDto: CreateProductDto): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    update(id: number, body: any): string;
    remove(id: number): string;
}
