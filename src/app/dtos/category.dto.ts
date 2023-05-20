import { IsUrl, IsNotEmpty, Length, IsEnum, IsOptional, validateOrReject  } from "class-validator";
import { AccessType, Category } from "../models/category.model";

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}
export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(2,34)
  name!: string;

  @IsUrl()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async ()=> {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'aqwqwqw';
    dto.image = 'https://api.escuelajs.co/api/v1/products';
    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
  }
})();
