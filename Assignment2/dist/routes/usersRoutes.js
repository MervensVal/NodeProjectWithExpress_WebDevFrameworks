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
//usersArray.push(new User("1","merv","val","merv@email.com"))
//Get request
userRouter.get('/', (req, res, next) => {
    res.status(200).send(usersArray);
});
//Post Request
userRouter.post('/', (req, res, next) => {
    usersArray.push(new user_1.User(req.body.userId, req.body.firstName, req.body.lastName, req.body.emailAddress));
    res.status(201).send(usersArray[usersArray.length - 1]);
});
//Patch Request
userRouter.patch('/', (req, res, next) => {
    let Id = req.body.userId;
    let foundUser = null;
    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].userId === Id) {
            foundUser = usersArray[i];
            foundUser.firstName = req.body.firstName;
            foundUser.lastName = req.body.lastName;
            foundUser.emailAddress = req.body.emailAddress;
            break;
        }
    }
    if (foundUser === null) {
        res.status(404).send({ message: 'User was not found' });
    }
    else {
        res.send(foundUser);
    }
});
//# sourceMappingURL=usersRoutes.js.map