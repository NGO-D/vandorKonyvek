import { Controller, Get, Post, Body } from '@nestjs/common';
import { Product, ProductStatus } from '../products/products.model';
import { ProductsService } from '../products/products.service';
import { CreateProductDto } from '../products/dto/create-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}
    
    @Get()
    getAllProducts() {
        return this.productsService.getAllProducts();
    }

    @Post()
    createProduct(@Body() createProductDto:CreateProductDto): Product {
        return this.productsService.createProduct(createProductDto);
    }
}
