import { UserRole } from "./user-role.enum";

export class TokenPayload {
    user_userName: string;
    user_role: UserRole;
    user_email: string;
}