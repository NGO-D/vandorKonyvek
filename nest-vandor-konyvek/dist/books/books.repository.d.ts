import { Repository } from "typeorm";
import { Book } from './books.entity';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';
import { CreateBookDto } from "./dto/create-book.dto";
export declare class BookRepository extends Repository<Book> {
    private logger;
    getBooks(filterDto: GetBooksFilterDto): Promise<Book[]>;
    createBook(createBookDto: CreateBookDto): Promise<Book>;
}
