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
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
const books_service_1 = require("./books.service");
const create_book_dto_1 = require("./dto/create-book.dto");
const get_books_filter_dto_1 = require("./dto/get-books-filter.dto");
let BooksController = class BooksController {
    constructor(booksService) {
        this.booksService = booksService;
    }
    getBooks(filterDto) {
        return this.booksService.getBooks(filterDto);
    }
    getOneBook(id) {
        return this.booksService.getOneBook(id);
    }
    createBook(createBookDto) {
        return this.booksService.createBook(createBookDto);
    }
    updateBook(id, body) {
        console.log(body);
        return this.booksService.updateBook(id, body);
    }
    deleteBook(id) {
        console.log('controller');
        return this.booksService.deleteBook(id);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_books_filter_dto_1.GetBooksFilterDto]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getBooks", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getOneBook", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.CreateBookDto]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "createBook", null);
__decorate([
    common_1.Patch('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "updateBook", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "deleteBook", null);
BooksController = __decorate([
    common_1.Controller('books'),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], BooksController);
exports.BooksController = BooksController;
//# sourceMappingURL=books.controller.js.map