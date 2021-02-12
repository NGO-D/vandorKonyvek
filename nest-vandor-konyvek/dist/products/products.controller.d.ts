import { Product } from '../products/products.entity';
import { ProductsService } from '../products/products.service';
import { CreateProductDto } from '../products/dto/create-product.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProductById(id: number): Promise<Product>;
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    deleteProduct(id: number): Promise<void>;
}
