import {get,post} from "./http";
import servicePath from "./apiUrl";
export const getArticleList = params =>{
    return get(servicePath.getArticleList,params);
}