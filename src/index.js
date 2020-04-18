import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { mainRoutes } from './routes/index.js';
import * as serviceWorker from './serviceWorker';
import { Login } from './pages/Login.js'
import 'antd/dist/antd.css'
//路由:重定向
import { HashRouter as Router,Switch,Route,Redirect,} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store.js'

ReactDOM.render(
  <React.StrictMode>
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path='/admin' render={routeProps=> <App {...routeProps} />} />
				{mainRoutes.map((route)=>{
					return <Route key={route.path} {...route} />
				})}
				<Redirect to='/404' />
			</Switch>
		</Router>
	</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
