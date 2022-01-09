const path = require('path')
const express= require('express');
const  sequelize = require('./models/product');


const app = express();



const adminjs = require('./routes/admin');
const  success = require('./routes/success');
const contract= require('./routes/contract');




const fail = require('./routes/404');


app.use(adminjs);
app.use(success);
app.use(contract);
app.use(fail);

sequelize
.sync()
.then(result =>{
  //  console.log(result);
    app.listen(4700);
})
.catch(err=>{
    console.log(err)
});






