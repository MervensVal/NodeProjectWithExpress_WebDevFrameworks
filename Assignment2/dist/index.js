"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersRoutes_1 = require("./routes/usersRoutes");
let application = express_1.default();
//This makes shure that any response that starts with User gets sent to userRouter
application.use('/users', usersRoutes_1.userRouter);
//res.status(404) in the method can be used to generate 404 error
application.use('/', (req, res, next) => {
    res.send("Main page with tables");
});
application.listen(3000);
//32 mins
//# sourceMappingURL=index.js.map