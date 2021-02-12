"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const typeorm_1 = require("typeorm");
const products_entity_1 = require("./products.entity");
const product_status_enum_1 = require("./product-status.enum");
let ProductRepository = class ProductRepository extends typeorm_1.Repository {
    async createProduct(createProductDto) {
        const { title, description } = createProductDto;
        const product = new products_entity_1.Product();
        product.title = title;
        product.description = description;
        product.status = product_status_enum_1.ProductStatus.OPEN;
        await product.save();
        return product;
    }
};
ProductRepository = __decorate([
    typeorm_1.EntityRepository(products_entity_1.Product)
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=products.repository.js.map