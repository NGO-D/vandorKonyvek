import { Body, Controller, Get, Param } from '@nestjs/common';
import { Book } from './books.entity';
import { BooksService } from './books.service';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {}

    @Get()
    getAllBooks(@Param() filterDto:GetBooksFilterDto): any {
        return this.booksService.getAllBooks(filterDto);
    }  
}