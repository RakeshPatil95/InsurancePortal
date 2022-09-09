const mysql=require('mysql'); 
const Pool=mysql.createPool({  
    host:'localhost',
    user:'root',
    password:'manager',
    port:3306,
    database:'SVRP',
    connectionLimit:100

})
module.exports={
    Pool,
}