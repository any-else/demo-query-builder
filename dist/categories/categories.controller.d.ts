import { CategoriesService } from "./categories.service";
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(data: any): Promise<import("typeorm").InsertResult>;
    Remove(id: string): string;
}
