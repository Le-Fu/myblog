var db = require('./db');

exports.save = function(user, callback){
    db.query('insert into t_user set ?', user, callback);
};

exports.getByName = function(username, callback){
    db.query('select * from t_user where username=?', [username], callback);
};

exports.getAllUser = function(callback){
    db.query('select * from t_user', [], callback);
};

exports.getByNameAndPwd = function(username, password, callback){
    db.query('select * from t_user where username=? and password=?',
                [username, password], callback);
};