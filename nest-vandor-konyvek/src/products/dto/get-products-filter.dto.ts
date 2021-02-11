import { ProductStatus } from '../products.model';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetProductsFilterDto {
    @IsOptional()
    @IsIn([ProductStatus.DONE, ProductStatus.IN_PROGRESS, ProductStatus.OPEN])
    status: ProductStatus;

    @IsOptional()
    @IsNotEmpty()
    search: string;
}