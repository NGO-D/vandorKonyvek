import { PipeTransform, BadRequestException } from '@nestjs/common';
import { BookAvailable } from '../book-available.enum';

export class BookAvailableValidationPipe implements PipeTransform {
    readonly allowed = [
        BookAvailable.YES,
        BookAvailable.NO
    ];

    transform(value: any) {
        const upperCaseValue = value.toUpperCase();
       

        if (!this.isAllowed(upperCaseValue)) {
            throw new BadRequestException('Value does not exist.');
        }

        return upperCaseValue;
    }

    private isAllowed(value): Boolean {
        const result = this.allowed.indexOf(value);
        return result !== -1
    }
}