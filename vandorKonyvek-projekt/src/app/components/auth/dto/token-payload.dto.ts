import { UserRole } from "../models/user-role.enum";

export class TokenPayload {
    user_id: number;
    user_userName: string;
    user_role: UserRole;
}