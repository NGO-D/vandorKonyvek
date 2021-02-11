import { Injectable, NotFoundException } from '@nestjs/common';
//import * as uuid from 'uuid/v1';
import { v4 as uuidv4 } from 'uuid';
import { CreateProductDto } from '../products/dto/create-product.dto';
import { Product, ProductStatus } from '../products/products.model';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    getAllProducts(): Product[] {
        return this.products;
    }

    getProductsWithFilters(filterDto: GetProductsFilterDto): Product[] {
        const {status, search} = filterDto;

        let products = this.getAllProducts();

        if (status) {
            products = products.filter(product => product.status === status);
        } 

        if (search) {
            products = products.filter(product => 
                product.description.includes(search) ||
                product.title.includes(search),
            );

        return products;
        }
    }

    getProductById(id: string): Product {
        const found = this.products.find(product => product.id === id);
            if (!found) {
                throw new NotFoundException('Task with ID "${id}" not found.');
            } 

            return found;
    }

    createProduct(createProductDto: CreateProductDto): Product {
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

    updateProduct(id: string, status: ProductStatus): Product {
        const product = this.getProductById(id);
        product.status = status;
        return product;
    }

    deleteProduct(id: string): void {
        const found = this.getProductById(id);
        this.products = this.products.filter(product => product.id !== found.id);
    }

}
