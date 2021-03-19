import { BookAvailable } from '../book-available.enum';

export class GetBooksFilterDto {
   book_available: BookAvailable;
   search: string;
}