const Koa = require('koa');
const app = new Koa();
// 引入koa-router并对其实例化
const Router = require('koa-router');
//路由实例化，增加路由前缀
const router = new Router({prefix:'/user'});
const user_controller = require('../controllers/user');

//登录
router.post('/login',user_controller.getLogin);

module.exports = router;
