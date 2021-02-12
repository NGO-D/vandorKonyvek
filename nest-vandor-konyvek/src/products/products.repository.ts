import { EntityRepository, Repository } from "typeorm";
import { Product } from "./products.entity";
import { CreateProductDto } from './dto/create-product.dto';
import { ProductStatus } from './product-status.enum';
import { ProductsService } from "./products.service";


@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    async createProduct(createProductDto: CreateProductDto): Promise<Product> {
        const { title, description } = createProductDto;

        const product = new Product();
        product.title = title;
        product.description = description;
        product.status = ProductStatus.OPEN;
        await product.save();

        return product;
    }

}