import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Book } from './books.entity';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';

@Controller('books')
@UseGuards(AuthGuard())
export class BooksController {
    private logger = new Logger('BooksController');

    constructor(private booksService: BooksService) {}

    @Get()
    getBooks(@Param() filterDto: GetBooksFilterDto): Promise<Book[]> {
        console.log(filterDto);
        this.logger.verbose(`FilterDto is: ${JSON.stringify(filterDto)}`)
        return this.booksService.getBooks(filterDto);
    }  

    @Get('/:id')
    getOneBook(@Param('id', ParseIntPipe) id: number): Promise<Book> {
        return this.booksService.getOneBook(id);
    }

    @Post('/new')
    createBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
        console.log(createBookDto);
        return this.booksService.createBook(createBookDto);
    }

    @Patch('/:id')
    updateBook(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any ) {
            console.log(body);
        return this.booksService.updateBook(id, body);
    }

    @Delete('/:id')
    deleteBook(@Param('id', ParseIntPipe) id: number) {
        console.log('controller');
        return this.booksService.deleteBook(id);
    }

}