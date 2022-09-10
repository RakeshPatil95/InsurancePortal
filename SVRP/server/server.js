const express =require('express');
const app=express();
const cors=require('cors'); //cors added to connect front end
app.use(express.json());//to convert it into json file
app.use(cors());
const customerRouter=require('./routes/CustomerAPI/CustomerAPI');
app.use('/customer',customerRouter);
app.listen(4000,'0.0.0.0',()=>{
    console.log("Server is started...");
})