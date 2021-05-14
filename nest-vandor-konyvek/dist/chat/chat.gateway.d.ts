/// <reference types="socket.io" />
import { NestGateway } from '@nestjs/websockets/interfaces/nest-gateway.interface';
import { ChatService } from './chat.service';
import { Message } from './message.entity';
import Socket = SocketIO.Socket;
import { Logger } from '@nestjs/common';
export declare class ChatGateway implements NestGateway {
    private chatService;
    logger: Logger;
    socket: Socket;
    constructor(chatService: ChatService);
    afterInit(server: any): void;
    handleConnection(socket: any): void;
    handleDisconnect(socket: any): void;
    handleGetAddMessage(sender: any, message: Message): void;
}
