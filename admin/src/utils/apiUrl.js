  
let ipUrl = 'http://127.0.0.1:3200/';
let servicePath = {
    getArticleList:`${ipUrl}article/list` ,  //  文章列表 文章详情
    getArticleType:`${ipUrl}article/type` ,  //  文章分类列表 
    publishArticle:`${ipUrl}article/add`,  //发布文章
    updateArticle:`${ipUrl}article/update`,  //发布文章
    deleteArticle:`${ipUrl}article/delete`,  //删除文章
}

export default servicePath;