import { BaseEntity } from "typeorm";
import { ProductStatus } from "./product-status.enum";
export declare class Product extends BaseEntity {
    id: number;
    title: string;
    description: string;
    status: ProductStatus;
}
