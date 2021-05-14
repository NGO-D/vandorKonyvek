import { Message } from './message.entity';
export declare class ChatService {
    messages: Message[];
    getMessages(): Message[];
    storeMessage(message: Message): void;
}
