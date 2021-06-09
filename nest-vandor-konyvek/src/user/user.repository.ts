import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from '../auth/dto/auth-credentials.dto';
import { User } from "./user.entity";
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { user_firstName,
                user_lastName,
                user_region,
                user_city,
                user_postcode,
                user_userName, 
                user_password } = authCredentialsDto;

        const user = new User();
        user.user_firstName = user_firstName;
        user.user_lastName = user_lastName;
        user.user_region = user_region;
        user.user_city = user_city;
        user.user_postcode = user_postcode;
        user.user_userName = user_userName;
        user.user_salt = await bcrypt.genSalt();
        user.user_password = await this.hashPassword(user_password, user.user_salt);

        try { 
            await user.save();
        } catch (error) {
            if (error.code === '23505') { // duplicate username. 
                // error.code needs to be a string
                throw new ConflictException('Duplicate username');
            } else {
                throw new InternalServerErrorException();
            }
        }
        await user.save();
    }

    async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<string> {
        const { user_userName, user_password } = authCredentialsDto;
        const user = await this.findOne({user_userName});

        if (user && await user.validatePassword(user_password)) {
            return user.user_userName;
        } else {
            return null;
        }
    }


    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }
}