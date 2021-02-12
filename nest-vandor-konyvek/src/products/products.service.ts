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



    async getProductById(id: number): Promise<Product> {
        const found = await this.productRepository.findOne(id);

         if (!found) {
                throw new NotFoundException('Task with ID "${id}" not found.');
            } 

            return found;
    }

    async createProduct(createProductDto: CreateProductDto): Promise<Product> {
        return this.productRepository.createProduct(createProductDto);
    }
    
    async deleteProduct(id: number): Promise<void> {
        const result = await this.productRepository.delete(id);
        
        //ez ugyanaz mint az if (!result) {}
        if (result.affected === 0) {
            throw new NotFoundException('Task with ID "${id}" not found.');
        }
    }
   

  /*

    withyout typeorm:

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

    */
}
