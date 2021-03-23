import { Book } from './books.entity';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    getBooks(filterDto: GetBooksFilterDto): Promise<Book[]>;
    getOneBook(id: number): Promise<Book>;
    createBook(createBookDto: CreateBookDto): Promise<Book>;
    deleteBook(id: number): Promise<void>;
}
