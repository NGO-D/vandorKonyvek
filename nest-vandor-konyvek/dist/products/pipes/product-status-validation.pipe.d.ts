import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { ProductStatus } from '../products.model';
export declare class ProductStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses: ProductStatus[];
    transform(value: any, metadata: ArgumentMetadata): any;
    private isStatusValid;
}
