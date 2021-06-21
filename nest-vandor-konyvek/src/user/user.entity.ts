import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Book } from './../books/books.entity';
import { UserRegion } from "./user-region.enum";
import { UserRole } from "./user-role.enum";
import { IsEmail, Matches, MaxLength, MinLength } from "class-validator";

@Entity()
@Unique(['user_email'])
export class User extends BaseEntity {
   
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({type: 'text', nullable: false})
    user_firstName: string;

    @Column({type: 'text', nullable: false})
    user_lastName: string;
    
    @Column({nullable: false})
    user_region: UserRegion;

    @Column({type: 'text', nullable: false})
    user_city: string 

    @Column({type: 'text', nullable: false})
    user_postcode: number;

    @Column({type: 'text', nullable: false})
    user_userName: string;

    @Column({nullable: false})
    user_role: UserRole.common;

    @Column({type: 'text', nullable: false})
    user_email: string;

    @Column({type: 'text', nullable: false})
    user_password: string;

    @Column({type: 'text', nullable: false})
    user_salt: string;

    //@OneToMany(type => Book, book => book.book_user, { eager: true })
    //user_books: Book[];

    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.user_salt);
        return hash === this.user_password;
    }

    // These are columnes, I used earlyer and now despite of the fact, 
    // that they were deleted from the database and the User entity Typeorem somehow still remembers it
    // and creates user table with these columns. Tryed to clear cache, did not work...
    // So I creted here these columns with no value and synchronised database as well.
    // To be fixed later...

   
}

