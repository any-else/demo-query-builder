import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductModule } from "./product/product.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./product/entities/product.entity";
import { UserModule } from "./user/user.module";
import { User } from "./user/entities/user.entity";
import { Address } from "./user/entities/address.entity";
import { CategoriesModule } from "./categories/categories.module";
import { CategoriesEntity } from "./categories/entity/categories.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "vuvanbui@18",
      database: "nest_session06",
      entities: [Product, User, Address, CategoriesEntity],
      synchronize: true,
    }),
    ProductModule,
    UserModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
