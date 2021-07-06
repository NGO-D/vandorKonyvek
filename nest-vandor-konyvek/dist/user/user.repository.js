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
        const { userFirstName, userLastName, userRegion, userCity, userPostcode, userName, userRole, userEmail, userPassword } = authCredentialsDto;
        this.firstLetterCapitalizer(userCity);
        console.log('repo');
        console.log(userCity);
        const user = new user_entity_1.User();
        user.userFirstName = userFirstName;
        user.userLastName = userLastName;
        user.userRegion = userRegion;
        user.userCity = userCity;
        user.userPostcode = userPostcode;
        user.userName = userName;
        user.userRole = userRole;
        user.userEmail = userEmail;
        user.userSalt = await bcrypt.genSalt();
        user.userPassword = await this.hashPassword(userPassword, user.userSalt);
        console.log(user);
        try {
            await user.save();
        }
        catch (error) {
            if (error.code === '23505') {
                console.log(error);
                console.log(error.code);
                throw new common_1.ConflictException('Duplicate email address.');
            }
            else {
                console.log(error.code);
                throw new common_1.InternalServerErrorException();
            }
        }
        await user.save();
    }
    async validateUserPassword(authCredentialsDto) {
        const { userEmail, userPassword } = authCredentialsDto;
        const user = await this.findOne({ userEmail });
        if (user && await user.validatePassword(userPassword)) {
            return user;
        }
        else {
            return null;
        }
    }
    async hashPassword(userPassword, userSalt) {
        return bcrypt.hash(userPassword, userSalt);
    }
    async firstLetterCapitalizer(userCity) {
        userCity = userCity.charAt(0).toUpperCase() + userCity.slice(1).toLowerCase();
        return userCity;
    }
};
UserRepository = __decorate([
    typeorm_1.EntityRepository(user_entity_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map