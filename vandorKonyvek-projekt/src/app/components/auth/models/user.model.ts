import { UserRegion } from "./user-region.enum";
import { UserRole } from "./user-role.enum";

export class User {
    userLastName: string;
    userFirstName: string;
    userRegion: UserRegion;
    userCity: string;
    userPostcode: string;
    userName: string;
    userRole: UserRole.user;
    userEmail: string;
    userPassword: string;
    userConfirmPassword: string;
    userAcceptTerms: boolean;
  }
  