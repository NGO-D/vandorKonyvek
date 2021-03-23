import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Book } from './books.entity';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {}

    @Get()
    getBooks(@Param() filterDto: GetBooksFilterDto): Promise<Book[]> {
        return this.booksService.getBooks(filterDto);
    }  

    @Get('/:id')
    getOneBook(@Param('id', ParseIntPipe) id: number): Promise<Book> {
        return this.booksService.getOneBook(id);
    }

    @Post()
    createBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
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