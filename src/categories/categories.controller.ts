import { Body, Controller, Delete, Param, Post } from "@nestjs/common";
import { CategoriesService } from "./categories.service";

@Controller("categories/")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post("create")
  async create(@Body() data) {
    const res = this.categoriesService.create(data);
    return res;
  }
  @Delete(":id")
  Remove(@Param("id") id: string) {
    return this.categoriesService.remove(+id);
  }
}
