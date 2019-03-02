import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import TopNav from 'Containers/TopNav'
import Sidebar from 'Containers/Sidebar';
import dashboard from './dashboard';
import organizations from './organizations';
import provider from './providers';
import users from './users';
import locations from './locations';
import { connect } from 'react-redux';

class MainApp extends Component {
	render() {
		const { match, containerClassnames} = this.props;

		return (
			<div id="app-container" className={containerClassnames}>
				<TopNav history={this.props.history} />
				{/*<Sidebar/>*/}
					<div className="container-fluid">
						<Switch>
							<Route path={`${match.url}/dashboard`} component={dashboard} />
							<Route path={`${match.url}/organizations `} component={organizations} />
							<Route path={`${match.url}/providers `} component={provider} />
							<Route path={`${match.url}/users `} component={users} />
							<Route path={`${match.url}/locations`} component={locations} />
							<Redirect to="/error" />
						</Switch>
					</div>
			</div>
		);
	}
}
const mapStateToProps = ({ menu }) => {
	const { containerClassnames} = menu;
	return { containerClassnames };
  }
  
export default withRouter(connect(mapStateToProps, {})(MainApp));