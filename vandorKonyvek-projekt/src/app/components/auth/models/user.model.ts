import { UserRegion } from "./user-region.enum";

export class User {
    userLastName: string;
    userFirstName: string;
    userRegion: UserRegion;
    userCity: string;
    userPostcode: string;
    userName: string;
    userIsAdmin: boolean;
    userEmail: string;
    userPassword: string;
    userConfirmPassword: string;
    userAcceptTerms: boolean;
  }
  