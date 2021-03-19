import { BooksService } from './books.service';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    getAllBooks(filterDto: GetBooksFilterDto): any;
}
