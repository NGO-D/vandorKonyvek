"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const chat_service_1 = require("./chat.service");
const message_entity_1 = require("./message.entity");
const common_1 = require("@nestjs/common");
let ChatGateway = class ChatGateway {
    constructor(chatService) {
        this.chatService = chatService;
        this.logger = new common_1.Logger('gateway');
    }
    afterInit(server) {
        this.logger.log(this.socket);
    }
    handleConnection(socket) {
        console.log(`gateway: ${socket}`);
        this.socket = socket;
        process.nextTick(() => {
            socket.emit('allMessages', this.chatService.getMessages());
        });
    }
    handleDisconnect(socket) { }
    handleGetAddMessage(sender, message) {
        this.chatService.storeMessage(message);
        sender.emit('newMessage', message);
        sender.broadcast.emit('newMessage', message);
    }
};
__decorate([
    websockets_1.SubscribeMessage({ value: 'data' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, message_entity_1.Message]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleGetAddMessage", null);
ChatGateway = __decorate([
    websockets_1.WebSocketGateway({ namespace: 'messages' }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatGateway);
exports.ChatGateway = ChatGateway;
//# sourceMappingURL=chat.gateway.js.map