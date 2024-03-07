import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post("create")
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get("list")
  findAll() {
    return this.productService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() Body) {
    return this.productService.update(+id, Body);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productService.remove(+id);
  }
}
