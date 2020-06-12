const articleModel=require('../models/articleModel');

module.exports = {
    /**
     * [发布文章]
     */
    async publishArticle(ctx){
        let {title,type_id,article_content,introduce,addTime} = ctx.request.body;
        ctx.status = 200;
        if (!title || !type_id || !article_content || !introduce) {
            ctx.body = {
                code: 0,
                msg: '缺少必要参数！'
            }
            return;
        }
        const result = await articleModel.insertMany({title,type_id,article_content,introduce,addTime});
        if (result) {
            ctx.body = {
                code: 1,
                msg: '发布成功！'
            }
        } else {
            ctx.body = {
                code: 0,
                msg: '发布失败！'
            }
        }
    },
    /**
     * [获取文章列表]
     */
    async articlelist(ctx) {
        const list = await articleModel.find();
        if (list) {
          ctx.status = 200;
          ctx.body = {
            code: 1,
            data: list
          }
        }
    },
    /**
     * [根据文章id查出文章详情]
     */
    async getArticleById(ctx) {
        const _id = ctx.params.id;
        const articleDetail = await articleModel.findOne({_id});
        if (articleDetail) {
          ctx.status = 200;
          ctx.body = {
            code: 1,
            data: articleDetail
          }
        }else {
            ctx.body = {
              code: 0,
              msg: '获取文章失败'
            };
        }
    }
}