import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<import("./entities/product.entity").Product[]>;
    findOne(id: string): Promise<import("./entities/product.entity").Product>;
    update(id: string, Body: any): string;
    remove(id: string): string;
}
