"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../models/user");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
//creating an array of type User
let usersArray = [];
usersArray.push(new user_1.User("merv123", "merv", "val", "merv@email.com"));
//Get requests
userRouter.get('/', (req, res, next) => {
    res.status(200).send(usersArray);
});
userRouter.post('/', (req, res, next) => {
});
//# sourceMappingURL=usersRoutes.js.map