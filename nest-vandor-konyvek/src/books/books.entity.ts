import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BookAvailable } from "./book-available.enum";

@Entity()
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn()
    book_id: number;

    @Column()
    book_title: string;

    @Column()
    book_image: string;

    @Column()
    book_available: BookAvailable;

}

