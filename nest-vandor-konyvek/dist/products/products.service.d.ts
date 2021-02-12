import { CreateProductDto } from '../products/dto/create-product.dto';
import { Product } from '../products/products.entity';
import { ProductRepository } from './products.repository';
export declare class ProductsService {
    private productRepository;
    constructor(productRepository: ProductRepository);
    getProductById(id: number): Promise<Product>;
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    deleteProduct(id: number): Promise<void>;
}
