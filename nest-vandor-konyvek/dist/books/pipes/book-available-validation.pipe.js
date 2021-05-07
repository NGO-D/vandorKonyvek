"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAvailableValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const book_available_enum_1 = require("../book-available.enum");
class BookAvailableValidationPipe {
    constructor() {
        this.allowed = [
            book_available_enum_1.BookAvailable.YES,
            book_available_enum_1.BookAvailable.NO
        ];
    }
    transform(value) {
        const upperCaseValue = value.toUpperCase();
        if (!this.isAllowed(upperCaseValue)) {
            throw new common_1.BadRequestException('Value does not exist.');
        }
        return upperCaseValue;
    }
    isAllowed(value) {
        const result = this.allowed.indexOf(value);
        return result !== -1;
    }
}
exports.BookAvailableValidationPipe = BookAvailableValidationPipe;
//# sourceMappingURL=book-available-validation.pipe.js.map