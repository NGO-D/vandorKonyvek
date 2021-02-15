import { CreateProductDto } from '../products/dto/create-product.dto';
import { Product } from '../products/products.entity';
import { ProductStatus } from '../products/product-status.enum';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';
import { ProductRepository } from './products.repository';
export declare class ProductsService {
    private productRepository;
    constructor(productRepository: ProductRepository);
    getProducts(getProductsFilterDto: GetProductsFilterDto): Promise<Product[]>;
    getProductById(id: number): Promise<Product>;
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    updateProduct(id: number, status: ProductStatus): Promise<Product>;
    deleteProduct(id: number): Promise<void>;
}
