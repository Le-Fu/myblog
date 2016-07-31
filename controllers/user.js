var userModel = require('../models/userModel');

exports.login = function(req, res, next) {
    res.render('login');
};


exports.checkLogin = function(req, res, next) {
    var uname = req.body.username;
    var pwd = req.body.pwd;

    userModel.getByNameAndPwd(uname, pwd, function(rs){
        console.log(rs);
        if(rs.length > 0){
            var user = rs[0];
            req.session.user = user;
            res.redirect('/');
        }
    });


};


exports.regist = function(req, res, next) {
    res.render('regist');
};

exports.doRegist = function(req, res, next) {
    var uname = req.body.username;
    var pwd = req.body.pwd;
    var sex = req.body.sex;

    var user = {
        username: uname,
        password: pwd,
        sex: sex
    };

    userModel.save(user, function(rs){
        if(rs.affectedRows > 0){
            res.redirect('/login');
        }else{
            res.send('fail');
        }
    })
};

exports.checkUser = function(req, res){
    var username = req.query.username;

    userModel.getByName(username, function(rs){
        if(rs.length > 0){
            res.send('fail');
        }else{
            res.send('success');
        }
    });
};