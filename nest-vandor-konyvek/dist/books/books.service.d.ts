import { Book } from './books.entity';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';
import { BookRepository } from './books.repository';
export declare class BooksService {
    private bookRepository;
    constructor(bookRepository: BookRepository);
    private books;
    getAllBooks(filterDto: GetBooksFilterDto): Promise<Book[]>;
}
