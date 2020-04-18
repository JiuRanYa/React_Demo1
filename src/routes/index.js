import Login from '../pages/Login.js';
import Index from '../pages/admin/dashboard/Index.js';
import List from '../pages/admin/products/List.js'
import Edit from '../pages/admin/products/Edit.js'
import PageNotFound from '../pages/PageNotFound.js'
import Notice from '../pages/admin/notices/Index.js'

export const mainRoutes = [{
	path: '/login',
	component: Login
},{
	path: '/404',
	component: PageNotFound
},{
	path: '/',
	component: Login
}]

export const adminRoutes = [{
	path: '/admin/dashboard',
	component: Index,
	isShow: true,
	title: '商品看板'
},{
	path: '/admin/products',
	component: List,
	exact: true,
	isShow: true,
	title: '商品管理'
},{
	path: '/admin/productsData',
	component: List,
	exact: true,
	isShow: true,
	title: '商品数据'
},{
	path: '/admin/productsIntc',
	component: List,
	exact: true,
	isShow: true,
	title: '商品简介'
},{
	path: '/admin/products/edit/:id?',
	component: Edit,
	isShow: false,
	title: ''
},{
	path: '/admin/notices',
	component: Notice,
	isShow: false
}]

