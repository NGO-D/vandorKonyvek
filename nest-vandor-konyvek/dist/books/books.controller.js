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
const passport_1 = require("@nestjs/passport");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const user_entity_1 = require("../auth/user.entity");
const book_available_enum_1 = require("./book-available.enum");
const books_service_1 = require("./books.service");
const create_book_dto_1 = require("./dto/create-book.dto");
const get_books_filter_dto_1 = require("./dto/get-books-filter.dto");
const book_available_validation_pipe_1 = require("./pipes/book-available-validation.pipe");
let BooksController = class BooksController {
    constructor(booksService) {
        this.booksService = booksService;
        this.logger = new common_1.Logger('BooksController');
    }
    getBooks(filterDto, user) {
        this.logger.verbose(`FilterDto is: ${JSON.stringify(filterDto)}`);
        return this.booksService.getBooks(filterDto, user);
    }
    getBookById(book_id, user) {
        return this.booksService.getBookById(book_id, user);
    }
    createBook(createBookDto, user) {
        return this.booksService.createBook(createBookDto, user);
    }
    updateBookStatus(book_id, book_available, user) {
        return this.booksService.updateBookStatus(book_id, book_available, user);
    }
    deleteBook(book_id, user) {
        return this.booksService.deleteBook(book_id, user);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Param()),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_books_filter_dto_1.GetBooksFilterDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getBooks", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getBookById", null);
__decorate([
    common_1.Post('/new'),
    __param(0, common_1.Body()),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.CreateBookDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "createBook", null);
__decorate([
    common_1.Patch('/:id/update'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body('book_available', book_available_validation_pipe_1.BookAvailableValidationPipe)),
    __param(2, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "updateBookStatus", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "deleteBook", null);
BooksController = __decorate([
    common_1.Controller('books'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], BooksController);
exports.BooksController = BooksController;
//# sourceMappingURL=books.controller.js.map