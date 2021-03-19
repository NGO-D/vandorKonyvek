import { Repository } from "typeorm";
import { Book } from './books.entity';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';
export declare class BookRepository extends Repository<Book> {
    getBooks(filterDto: GetBooksFilterDto): Promise<Book[]>;
}
