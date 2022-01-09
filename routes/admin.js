const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/booking',(req,res, next)=>{
    res.sendFile(path.join(__dirname,'../','veiws','form.html'));
})

module.exports= router;