import { IsNotEmpty } from 'class-validator';

export class CreateBookDto {
    @IsNotEmpty()
    book_title: string;

    @IsNotEmpty()
    book_description: string;

    @IsNotEmpty()
    book_image: string;
}