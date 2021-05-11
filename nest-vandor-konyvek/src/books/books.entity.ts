import { User } from "src/auth/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BookAvailable } from "./book-available.enum";

@Entity()
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn()
    book_id: number;

    @Column()
    book_title: string;

    @Column()
    book_description: string;

    @Column()
    book_image: string;

    @Column()
    book_available: BookAvailable;

    @ManyToOne(type => User, user => user.user_books, { eager: false })
    book_user: User;

    @Column()
    bookUserId: number;

}

