import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { adminRoutes } from './routes'
import Index from './components/Frame/Index.js';
import './App.css';
import { isLogined } from './utils/methods.js'



function App() {
  return (	isLogined() ?
    <Index>
	  <Switch>
		{adminRoutes.map(route=>{
			return (
			<Route 
				key={route.path} 
				exact={route.exact} 
				path={route.path}
				render={ routeProps=>{
					return <route.component {...routeProps} />
				}}
			/>)
		})}
		<Redirect to={adminRoutes[0].path} from='/admin' />
		<Redirect to='/404' />
	  </Switch>
	</Index> : <Redirect to='/login' />
  );
}

export default App;
