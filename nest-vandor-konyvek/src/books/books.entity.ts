import { User } from '../user/user.entity';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BookAvailable } from "./book-available.enum";

@Entity()
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn()
    bookId: number;

    @Column()
    bookTitle: string;

    @Column()
    bookDescription: string;

    @Column()
    bookImage: string;

    @Column()
    bookAvailable: BookAvailable;

    //@ManyToOne(type => User, user => user.userBooks, { eager: false })
    //bookUser: User;

    @Column()
    bookUserId: number;

}

