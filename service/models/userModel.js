const  mongoose=require('mongoose');
//创建一个和集合相关的schema对象  类似于表头
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName:{type:String,required:true},
    password:{type:String,required:true},
});
module.exports=mongoose.model('user', userSchema);