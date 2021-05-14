import { Injectable } from '@nestjs/common';
import { Message } from './message.entity';

@Injectable()
export class ChatService {
    messages:Message[] = [];

    getMessages ():Message[] {
        return this.messages;
    }

    storeMessage (message:Message) {
        this.messages.push(message);
    }
}