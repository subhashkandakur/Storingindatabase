const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send('<h1>Page not found<h1>');
    
});

module.exports = router;