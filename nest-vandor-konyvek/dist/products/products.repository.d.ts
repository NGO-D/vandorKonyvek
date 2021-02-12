import { Repository } from "typeorm";
import { Product } from "./products.entity";
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductRepository extends Repository<Product> {
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
}
