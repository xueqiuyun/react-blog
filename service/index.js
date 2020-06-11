const Koa = require('koa');
const app = new Koa();
//数据库连接
const dbs=require('./dbs/connect');
//route
const articlesRoute = require('./routes/articlesRoute');
//跨域
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');
app.use(bodyParser())
   .use(cors())
   .use(articlesRoute.routes()).use(articlesRoute.allowedMethods())
app.listen('3200',()=>{
    console.log('service start');
})