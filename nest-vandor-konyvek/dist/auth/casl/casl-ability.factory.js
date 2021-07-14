"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaslAbilityFactory = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../../user/user.entity");
const ability_1 = require("@casl/ability");
const action_enum_1 = require("../action.enum");
const books_entity_1 = require("../../books/books.entity");
let CaslAbilityFactory = class CaslAbilityFactory {
    createForUser(user) {
        const { can, cannot, build } = new ability_1.AbilityBuilder(ability_1.Ability);
        if (user.userIsAdmin) {
            can(action_enum_1.Action.Manage, 'all');
        }
        else {
            can(action_enum_1.Action.Read, 'all');
        }
        can(action_enum_1.Action.Update, books_entity_1.Book, { bookId: user.userId });
        cannot(action_enum_1.Action.Delete, books_entity_1.Book);
        return build({
            detectSubjectType: item => item.constructor
        });
    }
};
CaslAbilityFactory = __decorate([
    common_1.Injectable()
], CaslAbilityFactory);
exports.CaslAbilityFactory = CaslAbilityFactory;
//# sourceMappingURL=casl-ability.factory.js.map