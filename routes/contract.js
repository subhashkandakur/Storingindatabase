const path = require('path');

const express = require('express');

const router =express.Router();

router.get('/contract',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','veiws','contract.html'));
    
})

router.get('/willcontractsoon',(req,res,next)=>{
    res.send('<h1>Will Contract Soon</h1>')
})


module.exports= router;