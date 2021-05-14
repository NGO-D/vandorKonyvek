//import { messages } from '@nestjs/core/constants';
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { NestGateway } from '@nestjs/websockets/interfaces/nest-gateway.interface';
import { User } from '../user/user.entity';
import { ChatService } from './chat.service';
import { Message } from './message.entity';
import Socket = SocketIO.Socket;
import { Logger } from '@nestjs/common';


@WebSocketGateway({ namespace: 'messages' })
export class ChatGateway implements NestGateway {
    logger = new Logger('gateway');

    socket:Socket;

    constructor (private chatService:ChatService) {}

    afterInit (server) {
        this.logger.log(this.socket);
      //  this.logger.log(server);
        
    }

    handleConnection (socket) {
        console.log(`gateway: ${socket}`);
        this.socket = socket;
        process.nextTick(() => {
            socket.emit('allMessages', this.chatService.getMessages());
        });
    }

    handleDisconnect (socket) {}

    @SubscribeMessage({ value: 'data' })
    handleGetAddMessage (sender, message:Message) {
        this.chatService.storeMessage(message);
        sender.emit('newMessage', message);
        sender.broadcast.emit('newMessage', message);
    }

    

    /*
    @SubscribeMessage({ value: 'isWriting' })
    handleIsWriting (sender, user:User) {
        sender.broadcast.emit('isWriting', user);
    }

    @SubscribeMessage({ value: 'isNotWriting' })
    handleIsNotWriting (sender) {
        sender.broadcast.emit('isNotWriting');
    }
    */
}
