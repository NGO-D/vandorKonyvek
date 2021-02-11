"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const products_model_1 = require("../products/products.model");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [];
    }
    getAllProducts() {
        return this.products;
    }
    getProductsWithFilters(filterDto) {
        const { status, search } = filterDto;
        let products = this.getAllProducts();
        if (status) {
            products = products.filter(product => product.status === status);
        }
        if (search) {
            products = products.filter(product => product.description.includes(search) ||
                product.title.includes(search));
            return products;
        }
    }
    getProductById(id) {
        const found = this.products.find(product => product.id === id);
        if (!found) {
            throw new common_1.NotFoundException('Task with ID "${id}" not found.');
        }
        return found;
    }
    createProduct(createProductDto) {
        const { title, description } = createProductDto;
        const product = {
            id: uuid_1.v4(),
            title,
            description,
            status: products_model_1.ProductStatus.OPEN,
        };
        this.products.push(product);
        return product;
    }
    updateProduct(id, status) {
        const product = this.getProductById(id);
        product.status = status;
        return product;
    }
    deleteProduct(id) {
        const found = this.getProductById(id);
        this.products = this.products.filter(product => product.id !== found.id);
    }
};
ProductsService = __decorate([
    common_1.Injectable()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map