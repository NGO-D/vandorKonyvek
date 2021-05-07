import { PipeTransform } from '@nestjs/common';
import { BookAvailable } from '../book-available.enum';
export declare class BookAvailableValidationPipe implements PipeTransform {
    readonly allowed: BookAvailable[];
    transform(value: any): any;
    private isAllowed;
}
