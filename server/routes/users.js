const express = require("express");
const shortid = require('shortid');
const isEmpty = require('lodash/isEmpty');
const validator = require('validator')
const router = express.Router();


const userModel = require('../models/users');

const validatorInput = data =>{
    let errors = {};
    if(validator.isEmpty(data.username)){
        errors.username = "用户名不能为空";
    }
    if(validator.isEmpty(data.email)){
        errors.email = "邮箱不能为空";
    }
    if(validator.isEmpty(data.password)){
        errors.password = "密码不能为空";
    }
    if(validator.isEmpty(data.passwordConfirmation)){
        errors.passwordConfirmation = "请确认密码";
    }
    if(data.password !== data.passwordConfirmation){
        errors.passwordConfirmation = "前后密码不一致";
    }

    return {
        errors,
        isValid:isEmpty(errors)
    }
}
router.post('/', (req, res) => {
    const {errors, isValid} = validatorInput(req.body);
    if(!isValid){
        res.status(400).json(errors);
    }else {
        let newUser= new userModel({
            id:shortid.generate(),
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        newUser.save((err, data)=>{
            if(err){
                console.log(err);
            }
        });
        res.status(200).json({
            msg:'注册成功'
        });
    }
});

router.get('/check', (req,res) => {
    userModel.findOne(req.query, (err, data)=>{
        if(err){
            console.log(err);
            return;
        }
        if(data){
            res.status(200).json(req.query.username?{username:'该用户名已存在'}:{email:'该邮箱已存在'});
        }else{
            res.send(null)
        }
    })
})


module.exports = router;
