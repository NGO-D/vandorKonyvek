"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
const typeorm_1 = require("typeorm");
const books_entity_1 = require("./books.entity");
const book_available_enum_1 = require("./book-available.enum");
const common_1 = require("@nestjs/common");
let BookRepository = class BookRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger('BookRepository');
    }
    async getBooks(filterDto, user) {
        const { bookAvailable, bookSearch } = filterDto;
        const query = this.createQueryBuilder('book');
        if (bookAvailable) {
            query.andWhere('book.bookAvailable = :bookAvailable', { bookAvailable });
        }
        if (bookSearch) {
            query.andWhere('book.bookId = :bookSearch OR book.bookTitle LIKE :search OR book.bookDescription LIKE :search OR book.bookImage = :bookSearch', { bookSearch: `%${bookSearch}%` });
        }
        try {
            const books = await query.getMany();
            return books;
        }
        catch (error) {
            this.logger.error(`Failed to get books. Dto: ${JSON.stringify(filterDto)},`, error.stack);
            throw new common_1.InternalServerErrorException();
        }
    }
    async createBook(createBookDto, user) {
        const { bookTitle, bookDescription, bookImage } = createBookDto;
        const book = new books_entity_1.Book();
        book.bookTitle = bookTitle;
        book.bookDescription = bookDescription;
        book.bookImage = bookImage;
        book.bookAvailable = book_available_enum_1.BookAvailable.YES;
        try {
            await book.save();
        }
        catch (error) {
            this.logger.error(`Failed to create book ${createBookDto}`, error.stack);
            throw new common_1.InternalServerErrorException();
        }
        return book;
    }
};
BookRepository = __decorate([
    typeorm_1.EntityRepository(books_entity_1.Book)
], BookRepository);
exports.BookRepository = BookRepository;
//# sourceMappingURL=books.repository.js.map