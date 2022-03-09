var express = require('express');
var router = express.Router();
const path=require('path');
const db=require('../conf/db');
const common=require('../conf/common');


/* GET users listing. */

router.post('/login',function (req,res,next){
    let {username,password}=req.body;
    let sql="select * from users where username='"+username+"'";
    db.query(sql,function (err,result){
        if (err){
            console.log(err);
            return
        }else{
            if (result.length==0){
                res.send({flag:false,msg:"账号不存在"});
            }else if (result[0].password==password){
                res.send({flag:true,msg:"登录成功"});
            }else{
                res.send({flag:false,msg:"用户名或账号错误"});
            }
        }
    })
})

module.exports = router;
