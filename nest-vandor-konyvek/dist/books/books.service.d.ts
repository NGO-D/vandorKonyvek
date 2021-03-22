import { Book } from './books.entity';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';
import { BookRepository } from './books.repository';
import { CreateBookDto } from './dto/create-book.dto';
export declare class BooksService {
    private bookRepository;
    constructor(bookRepository: BookRepository);
    private books;
    getAllBooks(filterDto: GetBooksFilterDto): Promise<Book[]>;
    createBook(createBookDto: CreateBookDto): Promise<Book>;
    deleteBook(id: number): Promise<void>;
}
