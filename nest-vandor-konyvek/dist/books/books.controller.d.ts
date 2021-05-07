import { User } from 'src/auth/user.entity';
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
    getBookById(book_id: number, user: User): Promise<Book>;
    createBook(createBookDto: CreateBookDto, user: User): Promise<Book>;
    updateBookStatus(book_id: number, book_available: BookAvailable, user: User): Promise<Book>;
    deleteBook(book_id: number, user: User): Promise<void>;
}
