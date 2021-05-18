import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ChatRepository } from './chat.repostiory';
import { ChatGateway } from './chat.gateway';

@Module({
    imports: [
        TypeOrmModule.forFeature([ChatRepository]), 
        AuthModule,
        ChatGateway,
    ],
    controllers: [
        ChatController,
    ],
    providers: [
        ChatService,
    ],

})
export class ChatModule {}