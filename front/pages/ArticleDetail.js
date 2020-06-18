import React from 'react'
import Head from 'next/head'
import {Row, Col,Breadcrumb,Affix} from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import '../public/style/pages/detail.css'
//markdown语法高亮
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import { CalendarOutlined,TagOutlined} from '@ant-design/icons';
import Tocify from '../components/tocify.tsx';
import axios from "axios";
import servicePath from '../config/apiUrl';
const ArticleDetail = (detail) => {
  const data=detail.data;
  const renderer = new marked.Renderer();
  const tocify = new Tocify()
  renderer.heading = function(text, level, raw) {
      const anchor = tocify.add(text, level);
      return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
  marked.setOptions({
      renderer: renderer, 
      gfm: true,
      pedantic: false,
      sanitize: false,
      tables: true,
      breaks: false,
      smartLists: true,
      smartypants: false,
      highlight: function (code) {
          return hljs.highlightAuto(code).value;
      }
    }); 
    let html = marked(data.article_content);
  return (
    <>
      <Head>
        <title>详情页</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>文章</Breadcrumb.Item>
                <Breadcrumb.Item>xxxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div>
            <div className="detailed-title">{data.title}</div>
              <div className="list-icon center">
                  <p>
                     <CalendarOutlined />
                     <span>{data.addTime}</span>
                  </p>
                  <p>
                     <TagOutlined />
                     <span>vueJs</span>
                  </p>
              </div>
              <div className="detailed-content"
                   dangerouslySetInnerHTML={{__html:html}}>
              </div>
            </div>
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>

            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  );
}
ArticleDetail.getInitialProps = async(context)=>{
  console.log(context.query.id);
  let id =context.query.id;
  const res=await axios(`${servicePath.getArticleList}/${id}`);
  return { data: res.data.data }
}
export default ArticleDetail