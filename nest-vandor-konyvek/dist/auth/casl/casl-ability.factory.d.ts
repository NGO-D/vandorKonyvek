import { User } from "src/user/user.entity";
import { Ability, InferSubjects } from "@casl/ability";
import { Action } from "../action.enum";
import { Book } from "src/books/books.entity";
declare type Subjects = InferSubjects<typeof Book | typeof User> | 'all';
export declare type AppAbility = Ability<[Action, Subjects]>;
export declare class CaslAbilityFactory {
    createForUser(user: User): Ability<[Action, Subjects], import("@casl/ability").MongoQuery<Record<string | number | symbol, unknown>>>;
}
export {};
