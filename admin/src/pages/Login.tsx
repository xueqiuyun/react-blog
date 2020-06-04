import React,{useState} from 'react';
import { Button,Spin,Card,Input} from 'antd';
import '../static/css/Login.css';
import { UserOutlined,KeyOutlined } from '@ant-design/icons';
function Login(){
    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const checkLogin=()=>{
        setIsLoading(true);
        setTimeout(()=>{
            setIsLoading(false)
        },1000)
    }
    return(
        <div className="login-div">
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="xqy's admin" bordered={true} style={{ width: 400 }} >
                    <Input
                        id="userName"
                        size="large"
                        placeholder="Enter your userName"
                        prefix={<UserOutlined />}
                        onChange={(e)=>{setUserName(e.target.value)}}
                    /> 
                    <br/><br/>
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="Enter your password"
                        prefix={<KeyOutlined />}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />     
                    <br/><br/>
                    <Button type="primary" size="large" block onClick={checkLogin} > Login in </Button>
                </Card>
            </Spin>
        </div>
    )

}
export default Login;