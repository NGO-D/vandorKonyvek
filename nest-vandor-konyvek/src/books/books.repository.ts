import { EntityRepository, Repository } from "typeorm";
import { Book } from './books.entity';
import { BookAvailable } from './book-available.enum';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';
import { CreateBookDto } from "./dto/create-book.dto";
import { InternalServerErrorException, Logger } from "@nestjs/common";

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
    private logger = new Logger('BookRepository');

    async getBooks(filterDto: GetBooksFilterDto): Promise<Book[]> {
        
        const { book_available, search } = filterDto;
        const query = this.createQueryBuilder('book');

        if (book_available) {

            query.andWhere('book.book_available = :book_available', {book_available});
        }

        if (search) {
            
            query.andWhere('book.book_id = :search OR book.book_title LIKE :search OR book.book_description LIKE :search OR book.book_image = :search', {search: `%${search}%`} );
            
        }

        try {
            const books = await query.getMany();
            return books;
        } catch (error) {
            this.logger.error(`Failed to get books. Dto: ${JSON.stringify(filterDto)},`, error.stack);
            throw new InternalServerErrorException();
        }
        
    }

    async createBook(createBookDto: CreateBookDto): Promise<Book> {
        const { book_title, book_description, book_image } = createBookDto;

        const book = new Book();
        book.book_title = book_title;
        book.book_description = book_description;
        book.book_image = book_image;
        book.book_available = BookAvailable.YES;

        try {
            await book.save();
        } catch (error) {
            this.logger.error(`Failed to create book ${createBookDto}`, error.stack);
            throw new InternalServerErrorException();
        }
        
        return book;
    }
}