const express =require('express');
const app=express();
const cors = require('cors'); //cors added to connect front end
const jwt = require('jsonwebtoken')
const utils = require('./utils');
const config = require('./config')
app.use(cors());
app.use((request, response, next) => {
    if (request.url === '/customer/signup' || request.url === '/customer/signin') {
      next()
    } else {
      const token = request.headers['token']
      // now the home may get a token or may not
    //   if (request.url == '/home/' && request.method == 'GET') {
    //     if (token == 'undefined') {
    //       next()
    //       return
    //     }
    //   }
  
      if (!token || token.length === 0) {
        response.send(utils.createResult('token is missing'))
      } else {
        try {
          // extract the customer id from token
          const payload = jwt.verify(token, config.secret)
  
          // add the userid to the request so that
          // all the other requests can use it
          request.id = payload.id
  
          next()
        } catch (ex) {
          response.send(utils.createResult('invalid token'))
        }
      }
    }
})
app.use(express.json());//to convert it into json file

app.use(express.static('customerImages'))
const customerRouter=require('./routes/CustomerAPI/CustomerAPI');
app.use('/customer', customerRouter);
const UserRouter=require('./routes/User/User');
const { request, response } = require('express');
app.use('/customer', UserRouter);
app.listen(4000,'0.0.0.0',()=>{
    console.log("Server is started...");
})