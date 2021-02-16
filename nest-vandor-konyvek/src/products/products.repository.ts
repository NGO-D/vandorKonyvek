import { EntityRepository, Repository } from "typeorm";
import { Product } from "./products.entity";
import { CreateProductDto } from './dto/create-product.dto';
import { ProductStatus } from './product-status.enum';
import { ProductsService } from "./products.service";
import { GetProductsFilterDto } from "./dto/get-products-filter.dto";
import { ProductsController } from "./products.controller";


@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

    async getProducts(filterDto: GetProductsFilterDto): Promise<Product[]> {
        const { status, search } = filterDto;
        const query = this.createQueryBuilder('product');

        if (status) {
            query.andWhere('product.status = :status', {status});
        }

        if (search) {
            
            query.andWhere('product.title LIKE :search OR product.description LIKE :search', {search: `%${search}%`} );
            
        }

        const products = await query.getMany();
        return products;
    }

    async createProduct(createProductDto: CreateProductDto): Promise<Product> {
        const { title, description } = createProductDto;

        const product = new Product();
        product.title = title;
        product.description = description;
        product.status = ProductStatus.OPEN;
        await product.save();
        console.log('respo');
        return product;
    }

}