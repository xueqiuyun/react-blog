//引入Mongoose
const mongoose = require("mongoose");
//格式化日期
const moment = require('moment');
//创建一个和集合相关的schema对象  类似于表头
var Schema = mongoose.Schema;
//创建文章模型
var articleSchema = new Schema({
    //文章标题
    title: {
        type: String,
        required: true,
    }, 
    //文章类型编号
    type_id: { 
        type: String, 
        required: true 
    }, 
    //文章主体内容
    article_content: { 
        type: String, 
        required: true 
    }, 
    //文章简介
    introduce: { 
        type: String, 
        required: true 
    }, 
    //文章发布时间
    addTime: { 
        type: String, 
        required: true, 
        default: () => moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    }, 
});
module.exports = mongoose.model("articles", articleSchema);
