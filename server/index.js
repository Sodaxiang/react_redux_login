const express = require('express');
const app = express();
const debug = require('debug')('my-application');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const auth = require('./routes/auth');

require('./db');
app.use(bodyParser.json()); //将请求转换成json格式

app.use('/api/user', users);
app.use('/api/login',auth);
app.listen(3030, (req, res)=>{
   debug("服务器运行在3030端口上");
})