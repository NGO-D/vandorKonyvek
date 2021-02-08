import { Product } from '../products/products.model';
import { ProductsService } from '../products/products.service';
import { CreateProductDto } from '../products/dto/create-product.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getAllProducts(): Product[];
    createProduct(createProductDto: CreateProductDto): Product;
}
