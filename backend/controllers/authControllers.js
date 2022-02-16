const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User')


exports.signUp=async(req,res)=>{
    const {name,email,password}=req.body
    try {
// check user exist
const foundUser=await User.findOne({email})
if(foundUser){
    return res.status(400).send({errors:[{msg:"email is already exists"}]})
}

        const user=new User({
            name,email,password
        })
        // hash password
const salt=10
const hashpassword=await bcrypt.hash(password,salt)
user.password=hashpassword

        await user.save()

      // Token
      const payload={
          id:user._id
      } 
      const token=jwt.sign(payload,process.env.mysecret,{ expiresIn: '3d' }) 
        res.send({user,token})
    } catch (error) {
        console.log(error)
        res.status(500).send('server error')
    }
}

exports.signIn=async(req,res)=>{
    const {email,password}=req.body
    try {
        // check user
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).send({errors:[{msg:"bad credentials"}]})
        }
        // check password
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).send({errors:[{msg:"bad credentials"}]})
        }
        // Token
        const payload={
            id:user._id
        } 
        const token=jwt.sign(payload,process.env.mysecret,{ expiresIn: '3d' }) 
 res.send({user,token})
    } catch (error) {
        console.log(error)
        res.status(500).send('server error')
    }
}

//@ url api/auth/current
//@ method get
//@req.headers

exports.getCurrent=async(req,res)=>{
    try {
        const user=await User.findById(req.user.id)
        res.send(user)
    } catch (error) {
        console.log(error)
            res.status(500).send('server error')
    }
    
    }