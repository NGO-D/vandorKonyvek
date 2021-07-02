import { UserRole } from "../models/user-role.enum";

export class TokenPayload {
    userId: number;
    userName: string;
    userRole: UserRole;
}