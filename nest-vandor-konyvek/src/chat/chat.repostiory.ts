import { EntityRepository, Repository } from "typeorm";
import { Conversation } from "./conversation.entity";

@EntityRepository(Conversation)
export class ChatRepository extends Repository<Conversation> {
    
}