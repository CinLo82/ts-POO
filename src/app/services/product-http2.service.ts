import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service"

export class ProductHttpService extends BaseHttpService<Product> {
  otroRequest(){
     this.url = 'https://api.escuelajs.co/api/v1/products';

  }
}
