"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./entities/product.entity");
const typeorm_2 = require("typeorm");
let ProductService = class ProductService {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    create(createProductDto) {
        return this.productRepo
            .createQueryBuilder("product")
            .insert()
            .into(product_entity_1.Product)
            .values(createProductDto)
            .execute();
    }
    findAll() {
        const res = this.productRepo
            .createQueryBuilder("product")
            .innerJoinAndSelect("product.categories", "categories")
            .getMany();
        return res;
    }
    findOne(id) {
        const res = this.productRepo
            .createQueryBuilder("product")
            .innerJoinAndSelect("product.categories", "categories")
            .where("product.id = :id", { id })
            .getOne();
        return res;
    }
    update(id, body) {
        const result = this.productRepo
            .createQueryBuilder("product")
            .update(product_entity_1.Product)
            .set({
            productName: body.productName,
            number: body.number,
        })
            .where("product.id = :id", { id })
            .execute();
        return `This action updates a #${id} product`;
    }
    remove(id) {
        const result = this.productRepo
            .createQueryBuilder("product")
            .delete()
            .from(product_entity_1.Product)
            .where("product.id = :id", { id })
            .execute();
        return `This action removes a #${id} product`;
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductService);
//# sourceMappingURL=product.service.js.map