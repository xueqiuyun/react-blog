import Head from "next/head";
import React,{useState} from 'react'

import {Row, Col , List ,Icon} from 'antd'
import Header from "../components/Header";
import Author from '../components/Author';
import Footer from '../components/Footer';
import { CalendarOutlined,TagOutlined} from '@ant-design/icons';

import '../public/style/pages/index.css';
const  Home=()=> {
  const [ mylist , setMylist ] = useState(
    [
      {title:'生活随记',context:'“海纳百川，有容乃大”。大格局是一种智慧，大智若愚；大格局是一种境界，大勇若怯。 格局需要心胸，眼界需要锻练，心里有贪念不可怕，怕你只贪念眼前小实惠而看不到远处的独特的好风景，不贪念一时与眼下的人才能达到享受大命格的格局。给别人方便就是给自己方便，格局大了，自己结局就好了~'},
      {title:'生活随记',context:'“海纳百川，有容乃大”。大格局是一种智慧，大智若愚；大格局是一种境界，大勇若怯。 格局需要心胸，眼界需要锻练，心里有贪念不可怕，怕你只贪念眼前小实惠而看不到远处的独特的好风景，不贪念一时与眼下的人才能达到享受大命格的格局。给别人方便就是给自己方便，格局大了，自己结局就好了~'},
      {title:'生活随记',context:'“海纳百川，有容乃大”。大格局是一种智慧，大智若愚；大格局是一种境界，大勇若怯。 格局需要心胸，眼界需要锻练，心里有贪念不可怕，怕你只贪念眼前小实惠而看不到远处的独特的好风景，不贪念一时与眼下的人才能达到享受大命格的格局。给别人方便就是给自己方便，格局大了，自己结局就好了~'},
      {title:'生活随记',context:'“海纳百川，有容乃大”。大格局是一种智慧，大智若愚；大格局是一种境界，大勇若怯。 格局需要心胸，眼界需要锻练，心里有贪念不可怕，怕你只贪念眼前小实惠而看不到远处的独特的好风景，不贪念一时与眼下的人才能达到享受大命格的格局。给别人方便就是给自己方便，格局大了，自己结局就好了~'}
    ]
  )
  return (
    <>
      <Head>
        <title>xqy`s blog</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            // header={<div className="list-header">最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={(item) => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <p>
                     <CalendarOutlined />
                     <span>2019-06-28</span>
                  </p>
                  <p>
                     <TagOutlined />
                     <span>vueJs</span>
                  </p>
                </div>
                <div className="list-context">{item.context}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
           <Author />
        </Col>
      </Row>
      <Footer />
    </>
  );
}
export default Home;
