import React from 'react';
import {Form, Card, Input, Button, message} from 'antd';

function Edit(){
	
	const handleSubmit = values => {
		console.log(values)
	}
	
	return (
		<Card title='商品编辑'>
			<Form 
			    name="basic"
			    initialValues={{ remember: true }}
				scrollToFirstError='true'
			    onFinish={values=>handleSubmit(values)}
			>
				<Form.Item 
					label='名字' 
					name='name' 
					rules={[{ required: true, message: '请输入商品名称' }]}
				>
					<Input placeholder="请输入商品名字" />
				</Form.Item>
				
				<Form.Item
					label='价格' 
					name='price'
					rules={[{ required: true, message: '请输入商品价格' }]}
				>
					<Input placeholder="请输入商品价格" />
				</Form.Item>
				
			    <Form.Item>
					<Button type="primary" htmlType="submit">确定</Button>
			    </Form.Item>
			</Form>
		</Card>
	);
}

export default Edit;




