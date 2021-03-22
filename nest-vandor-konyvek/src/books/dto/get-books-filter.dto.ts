import { BookAvailable } from '../book-available.enum';
import { IsNotEmpty, IsOptional, IsIn } from 'class-validator';

export class GetBooksFilterDto {
   @IsOptional()
   @IsIn([BookAvailable.YES, BookAvailable.NO])
   book_available: BookAvailable;

   @IsOptional()
   @IsNotEmpty()
   search: string;
}