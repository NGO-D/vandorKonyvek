import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from '../user/user.entity';
import { BookAvailable } from './book-available.enum';
import { Book } from './books.entity';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';
import { BookAvailableValidationPipe } from './pipes/book-available-validation.pipe';

@Controller('books')
@UseGuards(AuthGuard())
export class BooksController {
    private logger = new Logger('BooksController');

    constructor(private booksService: BooksService) {}

    @Get()
    getBooks(
        @Param() filterDto: GetBooksFilterDto,
        @GetUser() user: User
        ): Promise<Book[]> {
        this.logger.verbose(`FilterDto is: ${JSON.stringify(filterDto)}`)
        return this.booksService.getBooks(filterDto, user);
    }  

    @Get('/:id')
    getBookById(
        @Param('id', ParseIntPipe) book_id: number,
        @GetUser() user: User
        ): Promise<Book>{
        return this.booksService.getBookById(book_id, user);
    }

    @Post('/new')
    createBook(
        @Body() createBookDto: CreateBookDto,
        @GetUser() user: User
        ): Promise<Book> {
        return this.booksService.createBook(createBookDto, user);
    }

    @Patch('/:id/update')
    updateBookStatus(
        @Param('id', ParseIntPipe) book_id: number,
        @Body('book_available', BookAvailableValidationPipe) book_available: BookAvailable,
        @GetUser() user: User
        ) {
        return this.booksService.updateBookStatus(book_id, book_available, user);
    }

    @Delete('/:id')
    deleteBook(
        @Param('id', ParseIntPipe) book_id: number,
        @GetUser() user: User
        ): Promise<void> {
        return this.booksService.deleteBook(book_id, user);
    }

}