import { Product } from '../products/products.entity';
import { ProductStatus } from '../products/product-status.enum';
import { ProductsService } from '../products/products.service';
import { CreateProductDto } from '../products/dto/create-product.dto';
import { GetProductsFilterDto } from '../products/dto/get-products-filter.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProducts(filterDto: GetProductsFilterDto): Promise<Product[]>;
    getProductById(id: number): Promise<Product>;
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    updateProduct(id: number, status: ProductStatus): Promise<Product>;
    deleteProduct(id: number): Promise<void>;
}
