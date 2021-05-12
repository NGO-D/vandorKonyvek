import { Repository } from "typeorm";
import { Book } from './books.entity';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';
import { CreateBookDto } from "./dto/create-book.dto";
import { User } from '../user/user.entity';
export declare class BookRepository extends Repository<Book> {
    private logger;
    getBooks(filterDto: GetBooksFilterDto, user: User): Promise<Book[]>;
    createBook(createBookDto: CreateBookDto, user: User): Promise<Book>;
}
