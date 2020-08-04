import React from 'react';
import '../public/style/components/header.css';
// import { HomeOutlined } from '@ant-design/icons';
import { Row, Col, Menu } from 'antd';
import Router from "next/router";
const Header = () => {
    const handleClick=(e)=>{
        // console.log(e,`/${e.key}`);
        Router.push(`/${e.key}`);
    }
    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">小秋秋</span>
                    <span className="header-txt">爱前端、爱生活</span>
                </Col>

                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal" onClick={handleClick}>
                        <Menu.Item key="index">
                            {/* <HomeOutlined /> */}
                            Home
                        </Menu.Item>
                        <Menu.Item key="technology">
                            {/* <Icon type="youtube" /> */}
                            Technology
                        </Menu.Item>
                        {/* <Menu.Item key="life"> */}
                            {/* <Icon type="smile" /> */}
                            {/* Life */}
                        {/* </Menu.Item> */}
                        <Menu.Item key="Archives">
                            {/* <Icon type="smile" /> */}
                            Archives
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    );
};
export default Header;
