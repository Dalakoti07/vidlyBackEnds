const mongoose=require('mongoose');
const express=require('express');
const {User, validate} = require('../models/user');
const router=express.Router();

 router.post('/', async(req, res) => {
    // asking validate function which uses joi to tell if the post request has valid entries or not 
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    // find if the user already with same email id exist or not
    let user=await User.findOne({email:req.body.email});
    if(user) return res.status(400).send('User already existing');

    user =new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    await user.save();
    res.send(user);      
});

module.exports=router;