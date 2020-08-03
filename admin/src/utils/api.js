import {get,post} from "./http";
import servicePath from "./apiUrl";
//文章列表
export const getArticleList = () =>{
    return get(servicePath.getArticleList);
}
//文章分类列表
export const getArticleType = () =>{
    return get(servicePath.getArticleType);
}
//发布文章
export const publishArticle = params =>{
    return post(servicePath.publishArticle,params);
}
//根据文章id查找文章详情
export const getArticleById = (id) =>{
    return get(`${servicePath.getArticleList}/${id}`);
}

//更新文章
export const updateArticle = params =>{
    return post(servicePath.updateArticle,params);
}

//删除文章
export const deleteArticle = (id) =>{
    return get(`${servicePath.deleteArticle}/${id}`);
}

export const loginApi=(params)=>{
    return post(servicePath.login,params);
}