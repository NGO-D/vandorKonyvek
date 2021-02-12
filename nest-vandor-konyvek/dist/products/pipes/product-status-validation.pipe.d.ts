import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { ProductStatus } from '../product-status.enum';
export declare class ProductStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses: ProductStatus[];
    transform(value: any, metadata: ArgumentMetadata): any;
    private isStatusValid;
}
