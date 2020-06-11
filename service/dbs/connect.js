//连接mongodb数据库
const  mongoose=require('mongoose');
const DB_URL = 'mongodb://xiaoqiuqiu:20131515215@127.0.0.1:27017/blog'
mongoose.connect(DB_URL,{useUnifiedTopology: true,useNewUrlParser: true });
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.on('connected', function() {
   console.log('db ok');
});