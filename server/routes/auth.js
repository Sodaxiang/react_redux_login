const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config');
const userModel = require('../models/users');

router.post('/', (req, res)=>{
    const {identifier, password } = req.body;
    userModel.findOne({$or:[{ username:identifier},{email:identifier}], password: password},(err, user)=>{
        if(err){
            console.log(error);
            return;
        }else{
            if(!user){
                res.status(401).json({errors:{form:'用户名或密码错误'}});
            }else{
                //登录成功，生成jwtToken并返回
                const token = jwt.sign({
                    id:user.id,
                    username:user.username
                }, config.jwtSecret);
                res.status(200).json({jwtToken:token,msg:'登录成功'});
            }
        }
    })

})
module.exports = router;