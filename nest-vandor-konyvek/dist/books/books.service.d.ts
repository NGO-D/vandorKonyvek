import { Book } from './books.entity';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';
import { BookRepository } from './books.repository';
import { CreateBookDto } from './dto/create-book.dto';
import { User } from '../user/user.entity';
import { BookAvailable } from './book-available.enum';
export declare class BooksService {
    private bookRepository;
    constructor(bookRepository: BookRepository);
    getBooks(filterDto: GetBooksFilterDto, user: User): Promise<Book[]>;
    getBookById(bookId: number, user: User): Promise<Book>;
    createBook(createBookDto: CreateBookDto, user: User): Promise<Book>;
    updateBookStatus(bookId: number, bookAvailable: BookAvailable, user: User): Promise<Book>;
    deleteBook(bookId: number, user: User): Promise<void>;
}
