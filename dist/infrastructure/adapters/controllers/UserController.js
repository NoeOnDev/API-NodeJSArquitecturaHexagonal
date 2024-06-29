"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(createUser, getUserById, getAllUsers) {
        this.createUser = createUser;
        this.getUserById = getUserById;
        this.getAllUsers = getAllUsers;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, username, street, email, password } = req.body;
            yield this.createUser.execute(id, username, street, email, password);
            res.status(201).send();
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield this.getUserById.execute(id);
            if (user) {
                res.json(user);
            }
            else {
                res.status(404).send();
            }
        });
    }
    getAll(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.getAllUsers.execute();
            res.json(users);
        });
    }
}
exports.UserController = UserController;
