import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { CheckPolicies } from 'src/auth/check-policies.decorator';
import { GetUser } from 'src/auth/get-user.decorator';
import { ReadArticlePolicyHandler } from 'src/auth/policy-handler.interface';
import { PoliciesGuard } from 'src/auth/policy.guard';
import { User } from '../user/user.entity';
import { BookAvailable } from './book-available.enum';
import { Book } from './books.entity';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';
import { BookAvailableValidationPipe } from './pipes/book-available-validation.pipe';

@Controller('books')
export class BooksController {
    private logger = new Logger('BooksController');

    constructor(private booksService: BooksService) {}

    @Get()
    // @UseGuards(PoliciesGuard)
    // @CheckPolicies(new ReadArticlePolicyHandler())
    getBooks(
        @Param() filterDto: GetBooksFilterDto,
        @GetUser() user: User
        ): Promise<Book[]> {
        this.logger.verbose(`FilterDto is: ${JSON.stringify(filterDto)}`)
        return this.booksService.getBooks(filterDto, user);
    }  

    @Get('/:id')
    getBookById(
        @Param('bookId', ParseIntPipe) bookId: number,
        @GetUser() user: User
        ): Promise<Book>{
        return this.booksService.getBookById(bookId, user);
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
        @Param('bookId', ParseIntPipe) bookId: number,
        @Body('bookAvailable', BookAvailableValidationPipe) bookAvailable: BookAvailable,
        @GetUser() user: User
        ) {
        return this.booksService.updateBookStatus(bookId, bookAvailable, user);
    }

    @Delete('/:id')
    deleteBook(
        @Param('bookId', ParseIntPipe) bookId: number,
        @GetUser() user: User
        ): Promise<void> {
        return this.booksService.deleteBook(bookId, user);
    }

}