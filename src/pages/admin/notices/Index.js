import { Card, List, Typography, Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux'

const data = [
	'It’s a popular tool that works really well with React Router.',
	'First, install create-react-app and make a new project with it.',
	'Next, copy/paste either of the following examples into src/App.js.',
	'people using the keyboard for navigation'
]
function Index(props){
	return (
		<Card title="通知中心" 
			extra={<Button onClick={()=>props.dispatch({
				type: 'READ_ALL'
			})}>全部已读</Button>}>
			<List
				header={<div>Header</div>}
				footer={<div>Footer</div>}
				bordered
				dataSource = {data}
				renderItem={item => (
					<List.Item
						style={{ display: 'flex', alignContent: 'spaced-between'}}
					>
						<Typography.Text mark>[ITEM]</Typography.Text>{item}
						<Button size='small'>已读</Button>
					</List.Item>
				)}
			>
			</List>
		</Card>
	)
}

export default connect(state=>state)(Index);