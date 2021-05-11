import { IsNotEmpty, IsNumber } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Conversation extends BaseEntity {
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @IsNumber()
    conversation_id: number;
}


