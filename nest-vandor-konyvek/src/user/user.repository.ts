import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from '../auth/dto/auth-credentials.dto';
import { User } from "./user.entity";
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { userFirstName,
                userLastName,
                userRegion,
                userCity,
                userPostcode,
                userName, 
                userRole,
                userEmail,
                userPassword } = authCredentialsDto;
console.log('repo');
console.log(authCredentialsDto);

        const user = new User();
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
        } catch (error) {
            if (error.code === '23505') { // duplicate username. 
                // error.code needs to be a string
                throw new ConflictException('Duplicate username');
            } else {
                console.log(error.code);
                throw new InternalServerErrorException();
            }
        }
        await user.save();
    }

    async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<User> {
        const { userEmail, userPassword } = authCredentialsDto;
        const user = await this.findOne({userEmail});

        if (user && await user.validatePassword(userPassword)) {
            return user;
        } else {
            return null;
        }
    }


    private async hashPassword(userPassword: string, userSalt: string): Promise<string> {
        return bcrypt.hash(userPassword, userSalt);
    }
}
