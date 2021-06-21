"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async signUp(authCredentialsDto) {
        const { user_firstName, user_lastName, user_region, user_city, user_postcode, user_userName, user_role, user_email, user_password } = authCredentialsDto;
        console.log('repo');
        console.log(authCredentialsDto);
        const user = new user_entity_1.User();
        user.user_firstName = user_firstName;
        user.user_lastName = user_lastName;
        user.user_region = user_region;
        user.user_city = user_city;
        user.user_postcode = user_postcode;
        user.user_userName = user_userName;
        user.user_role = user_role;
        user.user_email = user_email;
        user.user_salt = await bcrypt.genSalt();
        user.user_password = await this.hashPassword(user_password, user.user_salt);
        console.log(user);
        try {
            await user.save();
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.ConflictException('Duplicate username');
            }
            else {
                console.log(error.code);
                throw new common_1.InternalServerErrorException();
            }
        }
        await user.save();
    }
    async validateUserPassword(authCredentialsDto) {
        const { user_email, user_password } = authCredentialsDto;
        const user = await this.findOne({ user_email });
        if (user && await user.validatePassword(user_password)) {
            return user;
        }
        else {
            return null;
        }
    }
    async hashPassword(password, salt) {
        return bcrypt.hash(password, salt);
    }
};
UserRepository = __decorate([
    typeorm_1.EntityRepository(user_entity_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map