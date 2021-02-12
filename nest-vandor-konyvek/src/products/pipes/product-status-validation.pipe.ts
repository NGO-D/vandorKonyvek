import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ProductStatus } from '../product-status.enum';

export class ProductStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses = [
        ProductStatus.OPEN,
        ProductStatus.IN_PROGRESS,
        ProductStatus.DONE,
    ]

    //matadata is opitonal
    transform(value: any, metadata: ArgumentMetadata) {
        value = value.toUpperCase();

        if (!this.isStatusValid(value)) {
            throw new BadRequestException('"${value}" is an invalid status.');
        }

        return value;
    }

    private isStatusValid(status: any) {
        const idx = this.allowedStatuses.indexOf(status);
        // indexOf Returns -1 if the value is not found.
        return idx !== -1;

    }
}
