const { request } = require('express')
const express=require('express')
const router=express.Router()

//signup page
router.post('/signup',(request,response)=>{
    response.send('send')
})

module.exports=router