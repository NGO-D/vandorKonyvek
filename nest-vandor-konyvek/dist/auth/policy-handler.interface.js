"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadArticlePolicyHandler = void 0;
const books_entity_1 = require("../books/books.entity");
const action_enum_1 = require("./action.enum");
class ReadArticlePolicyHandler {
    handle(ability) {
        return ability.can(action_enum_1.Action.Read, books_entity_1.Book);
    }
}
exports.ReadArticlePolicyHandler = ReadArticlePolicyHandler;
//# sourceMappingURL=policy-handler.interface.js.map