import { UserRole } from "src/user/user-role.enum";
export interface JwtPayload {
    userId: number;
    userName: string;
    userRole: UserRole;
}
