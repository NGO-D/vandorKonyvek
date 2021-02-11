import { Product, ProductStatus } from '../products/products.model';
import { ProductsService } from '../products/products.service';
import { CreateProductDto } from '../products/dto/create-product.dto';
import { GetProductsFilterDto } from '../products/dto/get-products-filter.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProducts(filterDto: GetProductsFilterDto): Product[];
    getProductById(id: string): Product;
    createProduct(createProductDto: CreateProductDto): Product;
    deleteProduct(id: string): void;
    updateProduct(id: string, status: ProductStatus): Product;
}
