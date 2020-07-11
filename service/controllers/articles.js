const articleModel=require('../models/articleModel');
const articleTypeModel=require('../models/articleTypeModel');
//格式化日期
const moment = require('moment');
module.exports = {
    // [发布文章]
    async publishArticle(ctx){
        let {title,type_id,article_content,introduce,addTime} = ctx.request.body;
        ctx.status = 200;
        if (!title || !type_id || !article_content || !introduce ) {
            ctx.body = {
                code: 0,
                msg: '缺少必要参数！'
            }
            return;
        }
        const result = await articleModel.insertMany({
                title,
                type_id,
                article_content,
                introduce,
                addTime
            });
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
    // [获取文章列表]
    async articlelist(ctx) {
        const list = await articleModel.find().sort({addTime:-1});
        const typeList=await articleTypeModel.find();
        const obj={};
        typeList.forEach((item)=>{
            obj[item.type_id]=item.type_name;
        });
        if (list && obj) {
          list.forEach((item)=>{
             item.type_name=obj[item.type_id];
          })
          ctx.status = 200;
          ctx.body = {
            code: 1,
            data: list
          }
        }
    },
    //[根据文章id查出文章详情]
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
    },
    //[获取文章分类]
    async getArticleType(ctx) {
        const typeList = await articleTypeModel.find();
        if (typeList) {
          ctx.status = 200;
          ctx.body = {
            code: 1,
            data: typeList
          }
        }
    },
    //[增加文章分类]
    async addArticleType(ctx) {
        let {type_name,type_id} = ctx.request.body;
        const addType = await articleTypeModel.insertMany({type_name,type_id});
        if (addType) {
          ctx.status = 200;
          ctx.body = {
            code: 1,
            msg:"增加分类成功"
          }
        }
    },
    //[更新文章]
    async updateArticle(ctx) {
      let {_id,title,type_id,article_content,introduce,addTime}=ctx.request.body;
      const result = await articleModel.updateOne({_id},{
          title,
          type_id,
          article_content,
          introduce,
          addTime:addTime || moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      });
      if (result) {
        ctx.status = 200;
        ctx.body = {
          code: 1,
          msg:"更新成功"
        }
      }
    },
     //[删除文章]
     async deleteArticle(ctx) {
      const _id = ctx.params.id;
      const result = await articleModel.deleteOne({_id});
      if (result) {
        ctx.status = 200;
        ctx.body = {
          code: 1,
          msg:"删除成功"
        }
      }
    },
}