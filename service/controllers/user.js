const userModel=require('../models/userModel.js');
module.exports = {
    //登录
    async getLogin(ctx) {
        let {userName,password} = ctx.request.body;
        const useInfo = await userModel.findOne({userName,password});
        if (useInfo) {
          ctx.status = 200;
          ctx.body = {
            code: 1,
            msg:'登录成功'
          }
        }else{
            ctx.body = {
                code: 0,
                msg:'登录失败'
            }
        }
    },
    //注册
    async getReg(ctx) {
      let {userName,password} = ctx.request.body;
      const useInfo = await userModel.insertMany({userName,password});
      if (useInfo) {
        ctx.status = 200;
        ctx.body = {
          code: 1,
          msg:'注册成功'
        }
      }else{
          ctx.body = {
              code: 0,
              msg:'注册失败'
          }
      }
  },
    
}