//连接mongodb数据库
const  mongoose=require('mongoose');
const DB_URL = 'mongodb://xiaoqiuqiu:20131515215@127.0.0.1:27017/blog'
mongoose.connect(DB_URL,{useUnifiedTopology: true,useNewUrlParser: true });
//MongoDB连接出错后回调
mongoose.connection.on('error', function (err) {
   console.log(' error: ' + err);
});
//MongoDB连接成功后回调
mongoose.connection.on('connected', function() {
   console.log('db ok');
});
// MongoDB连接断开回调
mongoose.connection.on('disconnected', function () {
  console.log(' disconnected');
});