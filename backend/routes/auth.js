const express=require('express')
const router=express.Router()
const {validator,registerRules,loginRules}=require('../middleware/validator')
const isAuth = require('../middleware/isAuth');
const {signIn,signUp,getCurrent}=require('../controllers/authControllers')
// test
// router.get('/test',(req,res)=>{
//     res.send('test')
// })

//@ url api/auth/signup
//@ method post
//@ req.body
router.post('/signup',[registerRules,validator],signUp)

//@ url api/auth/signin
//@method post 
//@req.body
router.post('/signin',[loginRules,validator],signIn)


router.get('/current',isAuth,getCurrent) 



module.exports=router