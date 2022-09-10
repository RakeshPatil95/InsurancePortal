
const { response } = require('express');
const express=require('express');
const router=express.Router();
const db=require('../../db');
const utils=require('../../utils');

router.get('/profile/:custId',(request,response)=>{
    const { custId } = request.params;
    const statement = `Select * from customer where id=?`

    db.Pool.query(statement,[custId],(error,data)=>{
         response.send(utils.createResult(error,data));
    })
})
router.get('/allplans/',(request,response)=>{
    const statement = `Select * from policy`

    db.Pool.query(statement,(error,data)=>{
         response.send(utils.createResult(error,data));
    })
})
router.put('/updateprofile/:custId', (request, response) => {
    let { custId } = request.params;
    const {
        aadhar,aadhar_doc,address_line1,address_line2,age,date_of_birth,image,pan,pan_doc,pincode,state,city,village
    } = request.body
    const statement = `update customer set aadhar=?,aadhar_doc=?,address_line1=?,address_line2=?,age=?,date_of_birth=?,image=?,pan=?,pan_doc=?,pincode=?,state=?,city=?,village=? where id = ?`
    db.Pool.query(statement,[aadhar,aadhar_doc,address_line1,address_line2,age,date_of_birth,image,pan,pan_doc,pincode,state,city,village,custId],(error,data)=>{
         response.send(utils.createResult(error,data));
    })
})
router.post('/:custId/buypolicy/:policyId',(request,response)=>{
    const { custId,policyId } = request.params;
    const {policy_start_date,policy_end_date,premium_date,premium,invoice,claim_date,claim_amount,status}=  request.body
    const statement = `Insert into customer_policy(policy_start_date,policy_end_date,premium_date,premium,invoice,claim_date,claim_amount,status,policy_id,customer_id) values(?,?,?,?,?,?,?,?,?,?) `

    db.Pool.query(statement,[policy_start_date,policy_end_date,premium_date,premium,invoice,claim_date,claim_amount,status,policyId,custId],(error,data)=>{
         response.send(utils.createResult(error,data));
    })
})
router.get('/:custId/myallpolicies/', (request, response) => {
    const {custId}= request.params
    const statement = `Select * from Customer_policy where customer_id = ?`

    db.Pool.query(statement,[custId],(error,data)=>{
         response.send(utils.createResult(error,data));
    })
})
router.get('/:custId/premiumpayments/', (request, response) => {
    const {custId}=request.params
    const statement = `Select * from Customer_policy where id =? and premium_date < date(now())`

    db.Pool.query(statement,[custId],(error,data)=>{
         response.send(utils.createResult(error,data));
    })
})
module.exports=router;
