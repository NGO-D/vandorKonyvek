import { IsNotEmpty, IsNumber } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message extends BaseEntity {
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @IsNumber()
    message_id: string;
}


