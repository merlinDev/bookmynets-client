import { UserTokenModel } from "./user-token.model"


export interface TokenModel {
    message: string
    result: UserTokenModel
    status: number
}