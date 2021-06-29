import { UserRole } from "src/user/user-role.enum";

export interface JwtPayload {
    user_id: number,
    user_userName: string,
    user_role: UserRole,
}