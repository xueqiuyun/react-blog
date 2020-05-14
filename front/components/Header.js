import React from 'react'
import '../public/style/components/header.css'
// import { HomeOutlined} from '@ant-design/icons';
import {Row,Col, Menu} from 'antd'
const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
        <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
            <span className="header-logo">小秋秋</span>
            <span className="header-txt">爱前端、爱生活</span>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu  mode="horizontal">
                <Menu.Item key="home">
                    {/* <HomeOutlined /> */}
                    首页
                </Menu.Item>
                <Menu.Item key="video">
                    {/* <Icon type="youtube" /> */}
                    文章
                </Menu.Item>
                <Menu.Item key="life">
                    {/* <Icon type="smile" /> */}
                    生活
                </Menu.Item>
            </Menu>
        </Col>
    </Row>
 </div>
)
export default Header
