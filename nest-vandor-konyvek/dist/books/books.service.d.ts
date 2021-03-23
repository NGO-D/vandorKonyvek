import { Book } from './books.entity';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';
import { BookRepository } from './books.repository';
import { CreateBookDto } from './dto/create-book.dto';
export declare class BooksService {
    private bookRepository;
    constructor(bookRepository: BookRepository);
    getBooks(filterDto: GetBooksFilterDto): Promise<Book[]>;
    getOneBook(id: number): Promise<Book>;
    createBook(createBookDto: CreateBookDto): Promise<Book>;
    deleteBook(id: number): Promise<void>;
}
