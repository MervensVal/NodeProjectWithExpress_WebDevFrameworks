import express from 'express';
import { User } from '../models/user';
const userRouter = express.Router();

//creating an array of type User
let usersArray:User[] = [];

//initial uer
usersArray.push(new User(1,"initialFName","initialLName","initial@email.com","password123"));


//Get request
userRouter.get('/',(req,res,next)=>{
    res.status(200).send(usersArray);
});

//Get Request using id
userRouter.get('/:userId',(req,res,next)=>{
    let foundUser: User|null = null;
    let idEntered = +req.params.userId;

    for (let i = 0; i < usersArray.length; i++){
        if (usersArray[i].userId === idEntered){
            foundUser = usersArray[i];
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

//Post Request
userRouter.post('/',(req,res,next)=>{
    let lastUser = usersArray[usersArray.length - 1].userId
    usersArray.push(new User(++lastUser,req.body.firstName,req.body.lastName,req.body.emailAddress,req.body.password));
    res.status(201).send(usersArray[usersArray.length - 1]);
});

//Patch Request
userRouter.patch('/:userId',(req,res,next)=>{
    let foundUser: User|null = null;
    let idEntered = +req.params.userId;

    for (let i = 0; i < usersArray.length; i++){
        if (usersArray[i].userId === idEntered){
            foundUser = usersArray[i];
            foundUser.firstName = req.body.firstName;
            foundUser.lastName = req.body.lastName;
            foundUser.emailAddress = req.body.emailAddress;
            foundUser.password = req.body.password;
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


//delete request
userRouter.delete('/:userId',(req,res,next)=>{
    let idEntered = +req.params.userId;
    let selectedIndex = -1;

    for(let i = 0; i < usersArray.length; i++){
        if(usersArray[i].userId === idEntered){
            selectedIndex = i;
            usersArray.splice(selectedIndex,1);
            break;
        }
    }
    if(selectedIndex >= 0){
        //Removes elements from an array in the position specified
        res.status(204).send('User deleted')
    }
    else{
        res.status(204).send('No item found')
    }

});

//This router is exported and used in userApp
export{userRouter}
export{usersArray}