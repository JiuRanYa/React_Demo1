import React from 'react'
import { Form, Input, Button, Checkbox, Card } from 'antd';
import './login.css';
import { setToken } from '../utils/methods.js';
import { withRouter } from 'react-router-dom'


function Login(props){
	const layout = {
	  labelCol: { span: 8 },
	  wrapperCol: { span: 16 },
	};
	const tailLayout = {
	  wrapperCol: { offset: 8, span: 16 },
	};

	const onFinish = values => {
		setToken(values.username)
		props.history.push('/admin')
	}
	

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Card title='Admin' className='login-form'>
			<Form
			  {...layout}
			  name="basic"
			  initialValues={{ remember: true }}
			  onFinish={onFinish}
			  onFinishFailed={onFinishFailed}
			>
			  <Form.Item
				label="用户名"
				name="username"
				rules={[{ required: true, message: 'Please input your username!' }]}
			  >
				<Input />
			  </Form.Item>

			  <Form.Item
				label="密码"
				name="password"
				rules={[{ required: true, message: 'Please input your password!' }]}
			  >
				<Input.Password />
			  </Form.Item>

			  <Form.Item {...tailLayout} name="remember" valuePropName="checked">
				<Checkbox>记住密码</Checkbox>
			  </Form.Item>

			  <Form.Item {...tailLayout}>
				<Button type="primary" htmlType="submit">
				  登录
				</Button>
			  </Form.Item>
			</Form>
		</Card>
	  );
}

export default withRouter(Login);