import { User } from "../../entities/User";

export interface IUserService {
    createUser(user : User): Promise<void>;
}