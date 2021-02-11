import { CreateProductDto } from '../products/dto/create-product.dto';
import { Product, ProductStatus } from '../products/products.model';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';
export declare class ProductsService {
    private products;
    getAllProducts(): Product[];
    getProductsWithFilters(filterDto: GetProductsFilterDto): Product[];
    getProductById(id: string): Product;
    createProduct(createProductDto: CreateProductDto): Product;
    updateProduct(id: string, status: ProductStatus): Product;
    deleteProduct(id: string): void;
}
