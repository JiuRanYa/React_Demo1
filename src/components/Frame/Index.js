import React from 'react';
import { Layout, Menu, Dropdown, Badge } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { adminRoutes } from '../../routes/index.js';
//withRouter
import { withRouter } from 'react-router-dom';
import { clearToken } from '../../utils/methods.js'
import './frame.css';
import { connect } from 'react-redux'
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const routes = adminRoutes.filter(route=>route.isShow)

function Index(props){
	console.log(props)
	
	function handleExit(){
		clearToken();
		props.history.push('/login');
	}
	
	function handeleNotice(){
		props.history.push('/admin/notices')
	}
	
	const popMenu = (
		<Menu>
			<Menu.Item key='information' onClick={handeleNotice.bind(this)}>通知</Menu.Item>
			<Menu.Item key='setting'>设置</Menu.Item>
			<Menu.Item key='exit' onClick={handleExit.bind(this)}>退出</Menu.Item>
		</Menu>
	)
	
	return (
		<Layout className='layout'>
		  <Header className="header">
		    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
		      <Menu.Item key="2">商品管理</Menu.Item>
		    </Menu>
			<Dropdown overlay={popMenu}>
				<div>
					<Badge dot={!props.isAllRead}>
						<span id='top_username'>尊敬的:1084350607</span>
					</Badge>
				</div>
			</Dropdown>
		  </Header>
		  <Content style={{ padding: '0 50px' }}>
		    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
		      <Sider className="site-layout-background" width={200}>
		        <Menu
		          mode="inline"
		          defaultSelectedKeys={['1']}
		          defaultOpenKeys={['sub1']}
		          style={{ height: '100%' }}
		        >
				{routes.map(route=>{
					return (
						<Menu.Item 
							key={route.path}
							onClick={p=>props.history.push(p.key)} 
						>
						{route.title}
						</Menu.Item>
					)
				})}
		          
		        </Menu>
		      </Sider>
		      <Content style={{ padding: '0 24px', minHeight: 280 }}>{props.children}</Content>
		    </Layout>
		  </Content>
		  <Footer style={{ textAlign: 'center' }}>Ant Design 2018 Created by Ant UED</Footer>
		</Layout>
	)
}

export default connect(state=>state)(withRouter(Index));
