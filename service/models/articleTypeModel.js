//引入Mongoose
const mongoose = require("mongoose");
//创建一个和集合相关的schema对象  类似于表头
var Schema = mongoose.Schema;
//创建文章模型
var articleTypeSchema = new Schema({
    //文章分类名字
    type_name: {
        type: String,
        required: true,
    }, 
    //文章类型id
    type_id: { 
        type: String, 
        required: true 
    } 
});
module.exports = mongoose.model("articleType", articleTypeSchema);
