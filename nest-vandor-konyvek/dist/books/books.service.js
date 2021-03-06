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
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const books_repository_1 = require("./books.repository");
const typeorm_1 = require("@nestjs/typeorm");
let BooksService = class BooksService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async getBooks(filterDto, user) {
        return await this.bookRepository.getBooks(filterDto, user);
    }
    async getBookById(bookId, user) {
        const found = await this.bookRepository.findOne({ where: { bookId, bookUserId: user.userId } });
        if (!found) {
            throw new common_1.NotFoundException(`Task with ID '${bookId}' not found.`);
        }
        return found;
    }
    async createBook(createBookDto, user) {
        return await this.bookRepository.createBook(createBookDto, user);
    }
    async updateBookStatus(bookId, bookAvailable, user) {
        const book = this.getBookById(bookId, user);
        (await book).bookAvailable = bookAvailable;
        return book;
    }
    async deleteBook(bookId, user) {
        const result = await this.bookRepository.delete({ bookId, bookUserId: user.userId });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Task with ID '${bookId}' not found.`);
        }
    }
};
BooksService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(books_repository_1.BookRepository)),
    __metadata("design:paramtypes", [books_repository_1.BookRepository])
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map