import { EntityRepository, Repository } from "typeorm";
import { Message } from '../chat/message.entity';

@EntityRepository(Message)
export class ChatRepository extends Repository<Message> {
    
}