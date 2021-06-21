import { UserRegion } from "./user-region.enum";
import { UserRole } from "./user-role.enum";

export class User {
    user_lastName: string;
    user_firstName: string;
    user_region: UserRegion;
    user_city: string;
    user_postcode: number;
    user_userName: string;
    user_role: UserRole.common;
    user_email: string;
    user_password: string
  }
  