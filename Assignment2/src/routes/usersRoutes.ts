import express from 'express';
import { User } from '../models/user';
const userRouter = express.Router();

//creating an array of type User
let usersArray:User[] = [];

usersArray.push(new User("merv123","merv","val","merv@email.com"))


//Get requests
userRouter.get('/',(req,res,next)=>{
    res.status(200).send(usersArray);
});

userRouter.post('/', (req,res,next)=>{

});

//This router is exported and used in userApp
export{userRouter}