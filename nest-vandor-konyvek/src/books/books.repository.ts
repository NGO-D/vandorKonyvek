import { EntityRepository, Repository } from "typeorm";
import { Book } from './books.entity';
import { BookAvailable } from './book-available.enum';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';
import { CreateBookDto } from "./dto/create-book.dto";
import { InternalServerErrorException, Logger } from "@nestjs/common";
import { User } from '../user/user.entity';

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
    private logger = new Logger('BookRepository');

    async getBooks(
        filterDto: GetBooksFilterDto,
        user: User
        ): Promise<Book[]>{
        
        const { bookAvailable, bookSearch } = filterDto;
        const query = this.createQueryBuilder('book');

        //query.where('book.bookUserId = :bookUserId', { bookUserId: user.userId });

        if (bookAvailable) {

            query.andWhere('book.bookAvailable = :bookAvailable', {bookAvailable});
        }

        if (bookSearch) {
            
            query.andWhere('book.bookId = :bookSearch OR book.bookTitle LIKE :search OR book.bookDescription LIKE :search OR book.bookImage = :bookSearch', {bookSearch: `%${bookSearch}%`} );
            
        }

        try {
            const books = await query.getMany();
            return books;
        } catch (error) {
            this.logger.error(`Failed to get books. Dto: ${JSON.stringify(filterDto)},`, error.stack);
            throw new InternalServerErrorException();
        }
        
    }

    async createBook(
        createBookDto: CreateBookDto,
        user: User
        ): Promise<Book> {
        const { bookTitle, bookDescription, bookImage } = createBookDto;

        const book = new Book();
        book.bookTitle = bookTitle;
        book.bookDescription = bookDescription;
        book.bookImage = bookImage;
        book.bookAvailable = BookAvailable.YES;
       // book.book_user = user;

        try {
            await book.save();
        } catch (error) {
            this.logger.error(`Failed to create book ${createBookDto}`, error.stack);
            throw new InternalServerErrorException();
        }
        
        // delete book.book_user;
        return book;
    }
}