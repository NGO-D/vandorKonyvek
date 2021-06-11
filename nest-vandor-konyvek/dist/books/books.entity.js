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
exports.Book = void 0;
const typeorm_1 = require("typeorm");
const book_available_enum_1 = require("./book-available.enum");
let Book = class Book extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Book.prototype, "book_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Book.prototype, "book_title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Book.prototype, "book_description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Book.prototype, "book_image", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Book.prototype, "book_available", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Book.prototype, "bookUserId", void 0);
Book = __decorate([
    typeorm_1.Entity()
], Book);
exports.Book = Book;
//# sourceMappingURL=books.entity.js.map