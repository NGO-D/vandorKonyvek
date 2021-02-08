import { CreateProductDto } from '../products/dto/create-product.dto';
import { Product } from '../products/products.model';
export declare class ProductsService {
    private products;
    getAllProducts(): Product[];
    createProduct(createProductDto: CreateProductDto): Product[];
}
