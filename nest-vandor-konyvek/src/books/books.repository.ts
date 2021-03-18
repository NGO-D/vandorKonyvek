import { EntityRepository, Repository } from "typeorm";
import { Book } from './books.entity';
import { BookAvailable } from './book-available.enum';

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {

}