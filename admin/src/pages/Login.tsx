import React,{useState} from 'react';
import { Button,Spin,Card,Input, message} from 'antd';
import '../static/css/Login.css';
import { UserOutlined,KeyOutlined } from '@ant-design/icons';
import {loginApi} from "../utils/api"
function Login(props:any){
    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const checkLogin=async()=>{
        setIsLoading(true);
        //校验数据
        if(!userName){
            message.error('用户名不能为空')
            return false
        }else if(!password){
            message.error('密码不能为空')
            return false
        }
        let data=await  loginApi({userName,password});
        setIsLoading(false);
        if(data.code==1){
            message.success("登录成功");
            setTimeout(()=>{
                props.history.push("/index");
            },1000)
        }else{
            message.success("登录失败");
        }
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