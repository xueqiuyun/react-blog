import {get,post} from "./http";
import servicePath from "./apiUrl";
//文章列表
export const getArticleList = params =>{
    return get(servicePath.getArticleList,params);
}
//文章分类列表
export const getArticleType = params =>{
    return get(servicePath.getArticleType,params);
}