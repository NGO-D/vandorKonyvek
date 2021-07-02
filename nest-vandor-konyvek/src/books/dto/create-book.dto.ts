import { IsNotEmpty } from 'class-validator';

export class CreateBookDto {
    @IsNotEmpty()
    bookTitle: string;

    @IsNotEmpty()
    bookDescription: string;

    @IsNotEmpty()
    bookImage: string;
}