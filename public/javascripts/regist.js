$(function(){
    $('#username').on('blur', function(){
        var that = this;
        //url, data, callback, type
        $.get('/checkUser', {username: this.value}, function(data){
            if(data == 'fail'){
                $(that).next('.info').addClass('error').html('用户已存在！！');
            }else{
                $(that).next('.info').html('勾');
            }
        }, 'text');
    });
});