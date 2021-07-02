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
exports.AuthCredentialsDto = void 0;
const class_validator_1 = require("class-validator");
const user_region_enum_1 = require("../../user/user-region.enum");
const user_role_enum_1 = require("../../user/user-role.enum");
class AuthCredentialsDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "user_firstName", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "user_lastName", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "user_city", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.MinLength(4),
    class_validator_1.MaxLength(4),
    __metadata("design:type", Number)
], AuthCredentialsDto.prototype, "user_postcode", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "user_userName", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "user_email", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(6),
    class_validator_1.Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'weak password' }),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "user_password", void 0);
exports.AuthCredentialsDto = AuthCredentialsDto;
//# sourceMappingURL=auth-credentials.dto.js.map