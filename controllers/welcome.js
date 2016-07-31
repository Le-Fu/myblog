var blogModel = require('../models/blogModel');
var userModel = require('../models/userModel');

exports.index = function(req, res){
    var user = req.session.user;
    if(user){
        blogModel.getByUser(user.user_id, function(rs){
            userModel.getAllUser(function(rs2){
                res.render('index', {blogs: rs, users: rs2, loginUser: user});
            });
        });
    }else{
        blogModel.getAll(function(rs){
            userModel.getAllUser(function(rs2){
                res.render('index', {blogs: rs, users: rs2, loginUser: null});
            });

        });
    }



};