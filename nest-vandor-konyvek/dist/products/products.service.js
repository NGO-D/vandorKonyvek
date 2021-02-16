"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const products_repository_1 = require("./products.repository");
let ProductsService = class ProductsService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async getProducts(getProductsFilterDto) {
        return this.productRepository.getProducts(getProductsFilterDto);
    }
    async getProductById(id) {
        const found = await this.productRepository.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException(`Task with ID '${id}' not found.`);
        }
        return found;
    }
    async createProduct(createProductDto) {
        console.log('service');
        return this.productRepository.createProduct(createProductDto);
    }
    async updateProduct(id, status) {
        const product = await this.getProductById(id);
        product.status = status;
        await product.save();
        return product;
    }
    async deleteProduct(id) {
        const result = await this.productRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Task with ID '${id}' not found.`);
        }
    }
};
ProductsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(products_repository_1.ProductRepository)),
    __metadata("design:paramtypes", [products_repository_1.ProductRepository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map