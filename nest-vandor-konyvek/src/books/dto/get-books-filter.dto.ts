import { BookAvailable } from '../book-available.enum';
import { IsNotEmpty, IsOptional, IsIn } from 'class-validator';

export class GetBooksFilterDto {
   @IsOptional()
   @IsIn([BookAvailable.YES, BookAvailable.NO])
   bookAvailable: BookAvailable;

   @IsOptional()
   @IsNotEmpty()
   bookSearch: string;
}