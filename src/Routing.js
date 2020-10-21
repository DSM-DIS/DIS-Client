import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginContainer from './Containers/Login/LoginContainer';
import MainContainer from './Containers/Main/MainContainer';
import WritingContainer from './Containers/Writing/WritingContainer';

const Routing = () => {
	return (
		<Switch>
			<Route exact path="/" component={LoginContainer} />
			<Route path="/main" component={MainContainer} />
			<Route path="/write" component={WritingContainer} />
		</Switch>
	);
};

export default Routing;
