//引入Mongoose
const mongoose = require("mongoose");
//创建一个和集合相关的schema对象  类似于表头
var Schema = mongoose.Schema;
//创建文章模型
var userSchema = new Schema({
    //文章标题
    userName: {
        type: String,
        required: true,
    }, 
    //文章类型编号
    password: { 
        type: String, 
        required: true 
    }
});
//注意：Mongoose默认建立collection为复数
module.exports = mongoose.model("user", userSchema);
