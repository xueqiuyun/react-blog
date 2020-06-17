import React,{useState,useEffect} from 'react';
import '../static/css/ArticleList.css'
import { List ,Row ,Col , Modal ,message ,Button,Switch} from 'antd';
import {getArticleList} from "../utils/api"
const { confirm } = Modal;
function ArticleList(){
    const [list,setList]=useState([] as any[]);
    useEffect(()=>{
        getList();
    },[]);
    const getList=()=>{
        getArticleList().then((res)=>{
            setList(res.data);
        })
    }
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
                        <Col span={3}>
                            <b>集数</b>
                        </Col>
                        <Col span={3}>
                            <b>浏览量</b>
                        </Col>

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
                               {item.type_id}
                            </Col>
                            <Col span={3}>
                                {item.addTime}
                            </Col>
                            <Col span={3}>
                                {item.addTime}
                            </Col>
                            <Col span={3}>
                              {item.addTime}
                            </Col>

                            <Col span={4} style={{textAlign:"center"}}>
                              <Button type="primary" >修改</Button>&nbsp;
                              <Button >删除 </Button>
                            </Col>
                        </Row>

                    </List.Item>
                )}
                />

        </div>
    )

}

export default ArticleList