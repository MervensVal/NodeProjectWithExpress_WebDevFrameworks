import express from 'express';
import { User } from '../models/user';
const userRouter = express.Router();

//creating an array of type User
let usersArray:User[] = [];

//usersArray.push(new User("1","merv","val","merv@email.com"))


//Get request
userRouter.get('/',(req,res,next)=>{
    res.status(200).send(usersArray);
});

//Post Request
userRouter.post('/',(req,res,next)=>{
    usersArray.push(new User(req.body.userId,req.body.firstName,req.body.lastName,req.body.emailAddress));
    res.status(201).send(usersArray[usersArray.length - 1]);
});

//Patch Request
userRouter.patch('/',(req,res,next)=>{
    let Id = req.body.userId;
    let foundUser: User|null = null;

    for (let i = 0; i < usersArray.length; i++){
        if (usersArray[i].userId === Id){
            foundUser = usersArray[i];
            foundUser.firstName = req.body.firstName;
            foundUser.lastName = req.body.lastName;
            foundUser.emailAddress = req.body.emailAddress;
            break;
        }
    }
    if(foundUser===null){
        res.status(404).send({message:'User was not found'})
    }
    else {
        res.send(foundUser);
    }

});

//This router is exported and used in userApp
export{userRouter}