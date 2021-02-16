import { Controller, Get, Post, Body, Patch, Delete, UsePipes, ValidationPipe, 
    Query, Param, ParseIntPipe } from '@nestjs/common';
import { Product } from '../products/products.entity';
import { ProductStatus } from '../products/product-status.enum';
import { ProductsService } from '../products/products.service';
import { CreateProductDto } from '../products/dto/create-product.dto';
import { ProductStatusValidationPipe } from '../products/pipes/product-status-validation.pipe';
import { GetProductsFilterDto } from '../products/dto/get-products-filter.dto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}


    @Get()
    getProducts(@Query(ValidationPipe) filterDto: GetProductsFilterDto): Promise<Product[]> {
        return this.productsService.getProducts(filterDto);
    }

    @Get('/:id')
    getProductById(@Param('id', ParseIntPipe) id: number): Promise<Product> {
        return this.productsService.getProductById(id);
    }

    @Post() 
    //@UsePipes(ValidationPipe)
    createProduct(@Body() createProductDto:CreateProductDto): Promise<Product> {
        console.log('controller');
        return this.productsService.createProduct(createProductDto);
    }
   
    @Patch('/:id/status')
    updateProduct(
        @Param('id', ParseIntPipe) id: number,
        @Body('status', ProductStatusValidationPipe) status: ProductStatus): Promise<Product> {
            return this.productsService.updateProduct(id, status);
        }

    @Delete('/:id')
    deleteProduct(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.productsService.deleteProduct(id);
    }
 
}
