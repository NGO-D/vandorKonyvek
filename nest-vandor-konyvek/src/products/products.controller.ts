import { Controller, Get, Post, Body, Patch, Delete, UsePipes, ValidationPipe, Query, Param } from '@nestjs/common';
import { Product, ProductStatus } from '../products/products.model';
import { ProductsService } from '../products/products.service';
import { CreateProductDto } from '../products/dto/create-product.dto';
import { ProductStatusValidationPipe } from '../products/pipes/product-status-validation.pipe';
import { GetProductsFilterDto } from '../products/dto/get-products-filter.dto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}
    
    @Get()
    getProducts(@Query(ValidationPipe) filterDto: GetProductsFilterDto): Product[] {
        if (Object.keys(filterDto).length) {
            return this.productsService.getProductsWithFilters(filterDto);
        } else {
            return this.productsService.getAllProducts();
        }
    }

    @Get('/:id')
    getProductById(@Param('id') id: string): Product {
        return this.productsService.getProductById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createProduct(@Body() createProductDto:CreateProductDto): Product {
        return this.productsService.createProduct(createProductDto);
    }

    @Delete('/:id')
    deleteProduct(@Param('id') id: string): void {
        return this.productsService.deleteProduct(id);
    }


    @Patch('/:id/status')
    updateProduct(
        @Param('id') id: string,
        @Body('status', ProductStatusValidationPipe) status: ProductStatus): Product {
        return this.productsService.updateProduct(id, status);
    }
}
