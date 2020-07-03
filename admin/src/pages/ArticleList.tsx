import React,{useState,useEffect} from 'react';
import '../static/css/ArticleList.css'
import { List ,Row ,Col , Modal ,message ,Button,Switch} from 'antd';
import {getArticleList,deleteArticle} from "../utils/api"
const { confirm } = Modal;

function ArticleList(props:any){
    const [list,setList]=useState([] as any[]);
    useEffect(()=>{
        getList();
    },[]);
    const getList=async()=>{
        let res=await getArticleList();
        console.log(res);
        setList(res.data);
    }
    //修改文章
    const updateArticle = (id:string) => {
        props.history.push(`/index/add/${id}`);
    };
    //删除文章
    const delArticle = (id:string) => {
        confirm({
          title: "确定要删除这篇博客文章吗?",
          content: "如果你点击OK按钮，文章将会永远被删除，无法恢复。",
          async onOk() {
            await deleteArticle(id);
            message.success("文章删除成功");
            getList();
          },
          onCancel() {
            // message.success("没有任何改变");
          },
        });
    };
    return (
        <div>
             <List
                header={
                    <Row className="list-div">
                        <Col span={8}>
                            <b>标题</b>
                        </Col>
                        <Col span={3}>
                            <b>类别</b>
                        </Col>
                        <Col span={3}>
                            <b>发布时间</b>
                        </Col>
                        {/* <Col span={3}>
                            <b>集数</b>
                        </Col>
                        <Col span={3}>
                            <b>浏览量</b>
                        </Col> */}

                        <Col span={4} style={{textAlign:"center"}}>
                            <b>操作</b>
                        </Col>
                    </Row>
                }
                bordered
                dataSource={list}
                renderItem={item => (
                    <List.Item>
                        <Row className="list-div">
                            <Col span={8}>
                                {item.title}
                            </Col>
                            <Col span={3}>
                               {item.type_id==1 ? "技术" : "生活"}
                            </Col>
                            <Col span={3}>
                                {item.addTime}
                            </Col>
                            {/* <Col span={3}>
                                {item.addTime}
                            </Col>
                            <Col span={3}>
                              {item.addTime}
                            </Col> */}

                            <Col span={4} style={{textAlign:"center"}}>
                              <Button type="primary" 
                                      onClick={() => {
                                        updateArticle(item._id);
                                      }}
                                >修改
                                </Button>&nbsp;
                              <Button danger
                                      onClick={() => {
                                        delArticle(item._id);
                                      }}>删除 </Button>
                            </Col>
                        </Row>

                    </List.Item>
                )}
                />

        </div>
    )

}

export default ArticleList