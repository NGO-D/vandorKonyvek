import { UserRole } from "src/user/user-role.enum";
export interface JwtPayload {
    user_userName: string;
    user_role: UserRole;
    user_email: string;
}
