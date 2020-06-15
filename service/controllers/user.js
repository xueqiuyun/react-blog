const userModel=require('../models/userModel');
module.exports = {
    /**
     * [登录]
     */
    async getLogin(ctx) {
        let {userName,password} = ctx.request.body;
        console.log(userName,password);
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
                msg:'失败'
            }
        }
    },
    
}