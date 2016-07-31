var db = require('./db');

exports.getAll = function(callback){
    var sql = 'select blog.*, usr.username '+
                'from t_blog blog, t_user usr '+
                'where blog.author=usr.user_id '+
                'order by blog.add_time desc';
    db.query(sql, [], callback);
};

exports.getByUser = function(userId, callback){
    db.query('select blog.*,usr.username from t_blog blog, t_user usr where blog.author=usr.user_id and blog.author=?',[userId],callback);
};