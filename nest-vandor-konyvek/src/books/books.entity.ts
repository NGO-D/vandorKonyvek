import { Entity, BaseEntity } from "typeorm";
import { BookAvailable } from "./book-available.enum";

Entity()
export class Book extends BaseEntity {
    book_id: number;

    book_title: string;

    book_image: string;

    book_available: BookAvailable;

}

