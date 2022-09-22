
const { response } = require('express');
const express=require('express');
const router=express.Router();
const db=require('../../db');
const utils = require('../../utils');
const multer = require('multer');
const { date } = require('yup');
const StorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'./customerImages')
    },
    filename: (req, file, cb) => {
        cb(null,'Customer'+'_'+ file.originalname);
    },
});
const upload = multer({ dest: "uploads/Customer" });

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
router.get('/:custId/allplansforme/', (request, response) => {
    const {custId}=request.params
    const statement = `select * from policy where id != ALL(select policy_id from customer_policy where customer_id=?) and min_entry_age<= ALL (select age from customer where id=? )`

    db.Pool.query(statement,[custId,custId],(error,data)=>{
         response.send(utils.createResult(error,data));
    })
})
//upload.array('images', 3)
router.put('/updateprofile/:custId',(request, response) => {
    const { custId } = request.params;
    console.log(custId)
    // const imagename = request.files
    // const image = imagename[0].filename
    // const aadhar_doc = imagename[1].filename
    // const pan_doc = imagename[2].filename
    const image = "Rakesh.jpjj"
    const aadhar_doc = "adhar.pdf"
    const pan_doc="pan.pdf"
    const {
        aadhar,address_line1,address_line2,age,date_of_birth,pan,pincode,state,city,village
    } = request.body
    const statement = `update customer set aadhar=?,aadhar_doc=?,address_line1=?,address_line2=?,age=?,date_of_birth=?,image=?,pan=?,pan_doc=?,pincode=?,state=?,city=?,village=? where id = ?`
    db.Pool.query(statement,[aadhar,aadhar_doc,address_line1,address_line2,age,date_of_birth,image,pan,pan_doc,pincode,state,city,village,custId],(error,data)=>{
         response.send(utils.createResult(error,data));
    })
})

router.post('/:custId/buypolicy/:policyId',(request,response)=>{
    const { custId,policyId } = request.params;
    const { policy_start_date, policy_end_date, premium_date, premium, claim_date, claim_amount, status } = request.body
    console.log(status)
    const claim_status = 0;
    const surrender_status = 0;
    const surrender_amount = 0
    const statement = `Insert into customer_policy(policy_start_date,policy_end_date,premium_date,premium,claim_date,claim_amount,status,policy_id,customer_id,claim_status,surrender_status,surrender_amount) values(?,?,?,?,?,?,?,?,?,?,?,?) `

    db.Pool.query(statement,[policy_start_date,policy_end_date,premium_date,premium,claim_date,claim_amount,status,policyId,custId,claim_status,surrender_status,surrender_amount],(error,data)=>{
         response.send(utils.createResult(error,data));
    })
})

router.get('/:custId/myallpolicies/', (request, response) => {
    const {custId}= request.params
    const statement = `Select * from Customer_policy where customer_id = ? 
    and claim_status=0 and surrender_status=0 and status=1`
    db.Pool.query(statement,[custId],(error,data)=>{
         response.send(utils.createResult(error,data));
    })
})

router.get('/:custId/myappliedpolicies/', (request, response) => {
    const { custId } = request.params
    const status=false
    const statement = `Select * from Customer_policy where customer_id = ? and status=? `
    db.Pool.query(statement,[custId,status],(error,data)=>{
         response.send(utils.createResult(error,data));
    })
})

router.get('/:custId/getCustomorsPolicyHistory', (request, response) => {
    const { custId } = request.params
    const statement = `Select * from Customer_policy where customer_id = ? and (claim_status>0 OR surrender_status>0) `
    db.Pool.query(statement,[custId],(error,data)=>{
        response.send(utils.createResult(error, data));
    })
})
router.get('/:custId/premiumpayments/', (request, response) => {
    const {custId}=request.params
    const statement = `Select * from Customer_policy where customer_id =? and premium_date < date(now()) and status=1`
      
    db.Pool.query(statement,[custId],(error,data)=>{
         response.send(utils.createResult(error,data));
    })
})
router.post('/uploadDocuments/:custId',upload.single('image'), (request, response) => {
    const { custId } = request.params
   // const {aadhar}= request.query
  
 //   console.log(request.files)
    var file = request.file
    console.log(file.originalname)
const filename = file.originalname
  //  console.log(file[0].originalname)
    // console.log(file[1].originalname)
    // console.log(file[2].originalname)
   // console.log(aadhar);
    const statement = `update customer set image=?,aadhar_doc=?,pan_doc=? where id=?`
    db.Pool.query(statement, [filename, id], (error, result) => {
        response.send(utils.createResult(error, result));
      }); 
})

router.get('/getPolicyDetails/:policyId', (request, response) => {
    const {policyId}=request.params
    const statement = `Select * from Policy where id =?`
    db.Pool.query(statement, [policyId], (error, data) => {
         response.send(utils.createResult(error,data));
    })
})

router.put('/applyForClaim/:policyId', (request, response) => {
    const {policyId}=request.params
    const statement = `update customer_policy set claim_status=1 where id=?`
    db.Pool.query(statement, [policyId], (error, data) => {
         response.send(utils.createResult(error,data));
    })
})

router.put('/applyForSurrender/:policyId', (request, response) => {
    const {policyId}=request.params
    const statement = `update customer_policy set surrender_status=1 where id=?`
    db.Pool.query(statement, [policyId], (error, data) => {
         response.send(utils.createResult(error,data));
    })
})

router.post('/payMyCustomersPremium', (request, response) => {
    const { customerId,policyId,amount,premium_date} = request.body
    const statement = `insert into policy_transactions(amount,customer_id,policy_id,payment_date) values (?,?,?,?)`
    db.Pool.query(statement,[amount,customerId,policyId,premium_date],(error,data)=>{
        response.send(utils.createResult(error, data));
    })
})

router.get('/:custId/mypremiumpendingpolicies', (request, response) => {
    const {custId}= request.params
    const statement = `Select * from Customer_policy where customer_id = ? 
    and premium_date<=Date(now()) and status=1`
    db.Pool.query(statement,[custId],(error,data)=>{
         response.send(utils.createResult(error,data));
    })
})
router.put('/:custId/updateCustomersPremiumDate', (request, response) => {
    const { custId } = request.params
    const { premium_date,policyID } = request.body
    // console.log(custId)
    // console.log(premium_date)
    // console.log(policyID)
    const statement = `update customer_policy set premium_date=? where customer_id=? and id=?`
    db.Pool.query(statement,[premium_date,custId,policyID],(error,data)=>{
         response.send(utils.createResult(error,data));
    })
})
module.exports=router;
