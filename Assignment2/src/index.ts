import express from "express";
import {userRouter} from './routes/usersRoutes';

let application = express();

//This makes shure that any response that starts with User gets sent to userRouter
application.use('/users', userRouter);

//res.status(404) in the method can be used to generate 404 error
application.use('/',(req,res,next)=>{
    res.send("Main page with tables");
})

application.listen(3000);

//32 mins