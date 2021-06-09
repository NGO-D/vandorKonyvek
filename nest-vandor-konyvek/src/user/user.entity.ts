import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Book } from './../books/books.entity';
import { UserRegion } from "./user-region.enum";
import { UserCity } from "./user-city.enum";

@Entity()
@Unique(['user_userName'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_firstName: string;

    @Column()
    user_lastName: string;
    
    @Column()
    user_region: UserRegion;

    @Column()
    user_city: UserCity;

    @Column()
    user_postcode: number;

    @Column()
    user_userName: string;

    @Column()
    user_password: string;

    @Column()
    user_salt: string;

    @OneToMany(type => Book, book => book.book_user, { eager: true })
    user_books: Book[];

    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.user_salt);
        return hash === this.user_password;
    }
}

/*
@PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @OneToMany(type => Book, book => book.book_user, { eager: true })
    user_books: Book[];

    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }
*/