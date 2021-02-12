import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ProductStatus } from "./product-status.enum";

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: ProductStatus;

} 