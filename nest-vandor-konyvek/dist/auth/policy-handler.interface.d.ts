import { AppAbility } from "./casl/casl-ability.factory";
interface IPolicyHandler {
    handle(ability: AppAbility): boolean;
}
declare type PolicyHandlerCallback = (ability: AppAbility) => boolean;
export declare type PolicyHandler = IPolicyHandler | PolicyHandlerCallback;
export declare class ReadArticlePolicyHandler implements IPolicyHandler {
    handle(ability: AppAbility): boolean;
}
export {};
