import { BookAvailable } from '../book-available.enum';

export class GetBooksFilterDto {
    book_id: number;
    book_title: string;
    book_image: string;
    book_available: BookAvailable;
}