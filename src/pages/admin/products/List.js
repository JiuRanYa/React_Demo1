import React from 'react';
import {Card, Table, Button, Popconfirm} from 'antd';

const dataSource = [{
	id: 1,
	name: '香皂',
	price: 52.1
},{
	id: 2,
	name: '牛奶',
	price: 118.0
},{
	id: 3,
	name: '泡面',
	price: 68.5
},{
	id: 4,
	name: '面包',
	price: 41.0
}]

function List(props){
	const columns = [{
		title: '序号',
		key: 'id',
		width: 80,
		align: 'center',
		//
		render: (txt, record, index) => index+1
	},{
		title: '名字',
		dataIndex: 'name'
	},{
		title: '价格',
		dataIndex: 'price'
	},{
		title: '操作',
		render: (txt, record, index) => {
			return (
				<div>
					<Button type='primary' size='small' style={{margin:'0 1rem'}}>
					修改
					</Button>
					<Popconfirm title='确定删除此项?' 
								onCancel={()=>{}} 
								onConfirm={()=>{console.log('用户确认删除')}}>
					<Button type='danger' size='small'>删除</Button>
					</Popconfirm>
				</div>
			)
		} 
	}]
	return (
		<Card 
			title='商品管理' 
			extra={<Button type='primary' 
						   onClick={()=>{props.history.push('/admin/products/edit')}}
				   >
				   新增
				   </Button>}
		>
			<Table 
				columns={columns}
				bordered
				dataSource={dataSource}
			/>
		</Card>
	);
}

export default List;