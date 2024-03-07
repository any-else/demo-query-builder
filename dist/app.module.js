"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const product_module_1 = require("./product/product.module");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./product/entities/product.entity");
const user_module_1 = require("./user/user.module");
const user_entity_1 = require("./user/entities/user.entity");
const address_entity_1 = require("./user/entities/address.entity");
const categories_module_1 = require("./categories/categories.module");
const categories_entity_1 = require("./categories/entity/categories.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "vuvanbui@18",
                database: "nest_session06",
                entities: [product_entity_1.Product, user_entity_1.User, address_entity_1.Address, categories_entity_1.CategoriesEntity],
                synchronize: true,
            }),
            product_module_1.ProductModule,
            user_module_1.UserModule,
            categories_module_1.CategoriesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map