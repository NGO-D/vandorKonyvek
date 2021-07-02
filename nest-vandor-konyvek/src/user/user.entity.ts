import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Book } from './../books/books.entity';
import { UserRegion } from "./user-region.enum";
import { UserRole } from "./user-role.enum";

@Entity()
@Unique(['userEmail'])
export class User extends BaseEntity {
   
    @PrimaryGeneratedColumn({type: 'int'})
    userId: number;

    @Column({type: 'varchar', nullable: false})
    userFirstName: string;

    @Column({type: 'varchar', nullable: false})
    userLastName: string;
    
    @Column({type: 'varchar', nullable: false})
    userRegion: UserRegion;

    @Column({type: 'varchar', nullable: false})
    userCity: string 

    @Column({type: 'int', nullable: false})
    userPostcode: number;

    @Column({type: 'varchar', nullable: false})
    userName: string;

    @Column({type: 'varchar', nullable: false})
    userRole: UserRole.common;

    @Column({type: 'varchar', nullable: false})
    userEmail: string;

    @Column({type: 'varchar', nullable: false})
    userPassword: string;

    @Column({type: 'varchar', nullable: false})
    userSalt: string;

    //@OneToMany(type => Book, book => book.book_user, { eager: true })
    //user_books: Book[];

    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.userSalt);
        return hash === this.userPassword;
    }
   
}

