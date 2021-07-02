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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const user_region_enum_1 = require("./user-region.enum");
const user_role_enum_1 = require("./user-role.enum");
let User = class User extends typeorm_1.BaseEntity {
    async validatePassword(password) {
        const hash = await bcrypt.hash(password, this.userSalt);
        return hash === this.userPassword;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int' }),
    __metadata("design:type", Number)
], User.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], User.prototype, "userFirstName", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], User.prototype, "userLastName", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], User.prototype, "userRegion", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], User.prototype, "userCity", void 0);
__decorate([
    typeorm_1.Column({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], User.prototype, "userPostcode", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], User.prototype, "userRole", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], User.prototype, "userEmail", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], User.prototype, "userPassword", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], User.prototype, "userSalt", void 0);
User = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(['userEmail'])
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map