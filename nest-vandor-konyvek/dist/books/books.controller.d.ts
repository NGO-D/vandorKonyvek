import { User } from '../user/user.entity';
import { BookAvailable } from './book-available.enum';
import { Book } from './books.entity';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';
export declare class BooksController {
    private booksService;
    private logger;
    constructor(booksService: BooksService);
    getBooks(filterDto: GetBooksFilterDto, user: User): Promise<Book[]>;
    getBookById(bookId: number, user: User): Promise<Book>;
    createBook(createBookDto: CreateBookDto, user: User): Promise<Book>;
    updateBookStatus(bookId: number, bookAvailable: BookAvailable, user: User): Promise<Book>;
    deleteBook(bookId: number, user: User): Promise<void>;
}
