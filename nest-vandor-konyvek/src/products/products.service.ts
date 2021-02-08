import { Injectable } from '@nestjs/common';
//import * as uuid from 'uuid/v1';
import { v4 as uuidv4 } from 'uuid';
import { CreateProductDto } from '../products/dto/create-product.dto';
import { Product, ProductStatus } from '../products/products.model';

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    getAllProducts(): Product[] {
        return this.products;
    }

    createProduct(createProductDto: CreateProductDto): Product[] {
        const { title, description } = createProductDto;

        const product: Product = {
            id: uuidv4(),
            title,
            description,
            status: ProductStatus.OPEN,
        };

        this.products.push(product);
        return product;
    }
}
