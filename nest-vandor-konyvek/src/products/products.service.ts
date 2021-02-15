import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from '../products/dto/create-product.dto';
import { Product } from '../products/products.entity';
import { ProductStatus } from '../products/product-status.enum';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductsService {
    constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository) {}

    getProducts(getProductsFilterDto: GetProductsFilterDto): Promise<Product[]> {
        return this.productRepository.getProducts(getProductsFilterDto);
    }

    async getProductById(id: number): Promise<Product> {
        const found = await this.productRepository.findOne(id);
         if (!found) {
                throw new NotFoundException(`Task with ID '${id}' not found.`);
            } 

            return found;
    }

    async createProduct(createProductDto: CreateProductDto): Promise<Product> {
        console.log(createProductDto);
        return this.productRepository.createProduct(createProductDto);
    }
    
    async updateProduct(id: number, status: ProductStatus): Promise<Product> {
        const product = await this.getProductById(id);
        product.status = status;
        await product.save(); 
        return product;
    }

    async deleteProduct(id: number): Promise<void> {
        const result = await this.productRepository.delete(id);
        
        //ez ugyanaz mint az if (!result) {}
        if (result.affected === 0) {
            throw new NotFoundException(`Task with ID '${id}' not found.`);
        }
    }
  
}
