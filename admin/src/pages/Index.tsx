import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Avatar } from 'antd';
import { HeartOutlined, CopyOutlined, FormOutlined, HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';
import '../static/css/Index.css';

import { Route } from 'react-router-dom';
import AddArticle from './AddArticle';
import ArticleList from './ArticleList';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
function AdminIndex(props: any) {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onCollapse = (collapsed: boolean) => {
        setCollapsed(collapsed);
    };
    const handleClickArticle = (e: any) => {
        props.history.push(e.key);
    };
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo">xqy'admin</div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={handleClickArticle}>
                    <Menu.Item key="/index">
                        <HomeOutlined />
                        <span>首页</span>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<CopyOutlined />} title="文章管理">
                        <Menu.Item key="/index/add" icon={<FormOutlined />}>
                            <span>添加文章</span>
                        </Menu.Item>
                        <Menu.Item key="/index/list" icon={<UnorderedListOutlined />}>
                            <span>文章列表</span>
                        </Menu.Item>
                    </SubMenu>

                    <Menu.Item key="9" icon={<HeartOutlined />}>
                        <span>留言管理</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: '0 15px', marginBottom: '10px' }}>
                    <div className="header">
                        <Breadcrumb style={{ margin: '0' }}>
                            <Breadcrumb.Item>后台管理</Breadcrumb.Item>
                            <Breadcrumb.Item>工作台</Breadcrumb.Item>
                        </Breadcrumb>
                        <div>
                            <Avatar size={40} shape="circle" src="http://101.132.120.95/images/headPhoto.jpg" />
                        </div>
                    </div>
                </Header>
                <Content style={{ margin: '0' }}>
                    <div style={{ padding: 15, background: '#fff', minHeight: 360 }}>
                        <Route path="/index/add" exact component={AddArticle} />
                        <Route path="/index/add/:id" exact component={AddArticle} />
                        <Route path="/index/list" exact component={ArticleList} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>xqy'admin</Footer>
            </Layout>
        </Layout>
    );
}

export default AdminIndex;
