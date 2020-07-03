import React,{useState,useEffect} from 'react';
import marked from 'marked';
import '../static/css/AddArticle.css'
import { Row, Col ,Input, Select ,Button ,DatePicker,message } from 'antd';
//markdown语法高亮
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import {getArticleType,publishArticle,getArticleById,updateArticle} from "../utils/api"
// import { VerticalRightOutlined } from '@ant-design/icons';
import moment from 'moment';
const { Option } = Select;
const { TextArea } = Input;
interface Props {
    type_id: string;
    type_name:string
}
function AddArticle(props:any){
    const [articleId,setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [articleTitle,setArticleTitle] = useState('')   //文章标题
    const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
    const [introducemd,setIntroducemd] = useState()            //简介的markdown内容
    const [introducehtml,setIntroducehtml] = useState('等待编辑') //简介的html内容
    const [showDate,setShowDate] = useState()   //发布日期
    // const [updateDate,setUpdateDate] = useState() //修改日志的日期
    const [typeInfo,setTypeInfo] = useState<Props[]>([]) // 文章类别信息
    const [selectedType,setSelectType] = useState() //选择的文章类别
    marked.setOptions({
        renderer: marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code:any) {
            return hljs.highlightAuto(code).value;
        }
    }); 
    useEffect(()=>{
        getTypeInfo();
        //获得文章ID
        let articleId = props.match.params.id;
        if (articleId) {
            setArticleId(articleId);
            getArticleDetail(articleId);
        }
    },[]);
    //修改文章（根据文章id获取文章详情）
    const getArticleDetail =async(articleId:string)=>{
        let res=await getArticleById(articleId);
        console.log(res);
        setArticleTitle(res.data.title);
        setArticleContent(res.data.article_content);
        setMarkdownContent(marked(res.data.article_content));
        setIntroducemd(res.data.introduce);
        setIntroducehtml(marked(res.data.introduce));
        setShowDate(res.data.addTime);
        setSelectType(res.data.type_id);
        console.log(showDate);
    }
    //分类列表
    const getTypeInfo = async() => {
        let res =await getArticleType();
        setTypeInfo(res.data);
        //[] ? 疑问
        // console.log(typeInfo);
    };
    //文章内容
    const changeContent = (e:any)=>{
        setArticleContent(e.target.value)
        let html=marked(e.target.value)
        setMarkdownContent(html)
    }
 	//文章简介
    const changeIntroduce = (e:any)=>{
         setIntroducemd(e.target.value)
         let html=marked(e.target.value)
         setIntroducehtml(html)
    }
    //文章类别
    const setSelectTypeHandler = (value:any) => {
    	setSelectType(value);
  	};
  	//发布文章
  	const saveArticle = async() => {
  		//校验数据
	  	if (!articleTitle) {
	  	    message.error("文章标题为空");
	  	    return false;
	  	} else if (!selectedType) {
	  	    message.error("文章类型为空");
	  	    return false;
	  	} else if (!articleContent) {
	  	    message.error("文章内容为空");
	  	    return false;
	  	} else if (!introducemd) {
	  	    message.error("文章简介为空");
	  	    return false;
        }
        //    else if (!showDate) {
	  	//     message.error("发布日期为空");
	  	//     return false;
	  	// }
	  	var postData:any={
	  		title:articleTitle,
	  		type_id:selectedType,
	  		article_content:articleContent,
	  		introduce:introducemd,
	  		addTime:showDate
        }
        //有id，更新文章;无id，新增文章
        if(articleId){
            postData["_id"]=articleId;
            let updateStatus=await updateArticle(postData);
            updateStatus.code==1 ?  message.success("更新成功") : message.error("更新失败")
            return;
        }
        let res=await publishArticle(postData);
        res.code==1 ? message.success("发布成功") :  message.error("发布失败");
        
  	}
  	 
    return (
        <div>
            <Row gutter={5}>
                <Col span={18}>
                        <Row gutter={10} >
                            <Col span={20}>
                                <Input 
                                    placeholder="文章标题" 
                                    value={articleTitle}
                                    onChange={e => {
                                      setArticleTitle(e.target.value);
                                    }}/>
                            </Col>
                            <Col span={4}>
                                &nbsp;
                                <Select
                                  placeholder="请选择"
                                  defaultValue={selectedType}
                                  onChange={setSelectTypeHandler}
                                  key={selectedType}
                                  style={{ width: 100 }}
                                >
                                  {typeInfo.map((item, index) => {
                                    return (
                                      <Option key={index} value={item.type_id}>
                                        {item.type_name}
                                      </Option>
                                    );
                                  })}
                                </Select>
                            </Col>
                        </Row>
                        <br/>
                        <Row gutter={10} >
                            <Col span={12}>
                                <TextArea 
                                    className="markdown-content" 
                                    rows={35}
                                    onChange={changeContent}
                                    value={articleContent}   
                                    placeholder="文章内容"
                                />
                            </Col>
                            <Col span={12}>
                                <div className="show-html"
                                     dangerouslySetInnerHTML = {{__html:markdownContent}}>
                                </div>
                            </Col>
                        </Row>  

                </Col>

                <Col span={6}>
                    <Row>
                        <Col span={24}>
                                {/* <Button>暂存文章</Button>&nbsp; */}
                                <Button type="primary" onClick={saveArticle}>发布文章</Button>
                                <br/>
                        </Col>
                        <Col span={24}>
                            <br/>
                            <TextArea 
                                rows={6} 
                                placeholder="文章简介"
                                onChange={changeIntroduce}
                                value={introducemd}
                            />
                            <br/><br/>
                            <div  className="introduce-html"
                                  dangerouslySetInnerHTML = {{__html:'文章简介：'+introducehtml}}>
                                
                            </div>
                        </Col>
                        
                        <Col span={12}>
                            <div className="date-select">
                                <DatePicker
                                    placeholder="发布日期"
                                    defaultValue={moment(showDate,'YYYY-MM-DD')}
                                    value={moment(showDate,'YYYY-MM-DD')}
                                    onChange={(date, dateString) => {
                                      setShowDate(dateString);
                                      console.log(dateString);
                                    }}
                                />
                            </div>
                        </Col>
                        {/* <Col span={12}>
                            <div className="date-select">
                                <DatePicker
                                    placeholder="修改日期" 
                                />
                            </div>
                        </Col> */}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
export default AddArticle