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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductsFilterDto = void 0;
const products_model_1 = require("../products.model");
const class_validator_1 = require("class-validator");
class GetProductsFilterDto {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsIn([products_model_1.ProductStatus.DONE, products_model_1.ProductStatus.IN_PROGRESS, products_model_1.ProductStatus.OPEN]),
    __metadata("design:type", String)
], GetProductsFilterDto.prototype, "status", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], GetProductsFilterDto.prototype, "search", void 0);
exports.GetProductsFilterDto = GetProductsFilterDto;
//# sourceMappingURL=get-products-filter.dto.js.map