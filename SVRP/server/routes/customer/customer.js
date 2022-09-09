
const { response } = require('express');
const express=require('express');
const router=express.Router();
const db=require('../../db');
const utils=require('../../utils');

router.post('/signin',(request,response)=>{
    console.log("sign in req recieved..");
    const{email,password}=request.body;
    const statement=`select customerId from customers where email=? and password=?`

    db.Pool.query(statement,[email,password],(error,data)=>{
         response.send(utils.createResult(error,data));
    })
})
router.post('/signup',(request,response)=>{
    const{firstName,lastName,phoneNumber,email, securityQuestion,securityAnswer}=request.body;
    const statement=`insert into customers(firstName,lastName,phoneNumber,email,securityQuestion,securityAnswer) values(?,?,?,?,?,?)`;
    db.Pool.query(statement,[firstName,lastName,phoneNumber,email, securityQuestion,securityAnswer],(error,data)=>{
        response.send(utils.createResult(error,data));
    })
})
module.exports=router;
