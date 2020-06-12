
import {Avatar,Divider,Tooltip} from 'antd'
import '../public/style/components/author.css';
import { GithubOutlined,QqOutlined,WechatOutlined } from '@ant-design/icons';
const Author =()=>{
    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="http://101.132.120.95/images/headPhoto.jpg" /></div>
            <div className="author-introduction">
                前端开发，Never quit and never stop
                <Divider>社交账号</Divider>
                <Tooltip placement="topLeft" title="https://github.com/xueqiuyun" arrowPointAtCenter>
                    <a href="https://github.com/xueqiuyun" target="_blank">
                        <Avatar size={32} 
                                icon={<GithubOutlined />} 
                                className="account"  />
                    </a>
                </Tooltip>
                <Avatar size={32} icon={<QqOutlined />}  className="account" />
                <Avatar size={32} icon={<WechatOutlined />}  className="account"  />
            </div>
        </div>
    )

}

export default Author