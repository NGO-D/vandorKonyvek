import { Repository } from "typeorm";
import { Product } from "./products.entity";
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsFilterDto } from "./dto/get-products-filter.dto";
export declare class ProductRepository extends Repository<Product> {
    getProducts(filterDto: GetProductsFilterDto): Promise<Product[]>;
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
}
