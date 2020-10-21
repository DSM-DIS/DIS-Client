import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginContainer from './Containers/Login/LoginContainer';
import MainContainer from './Containers/Main/MainContainer';
import NotFoundContainer from './Containers/NotFound/NotFoundContainer';
import WritingContainer from './Containers/Writing/WritingContainer';

const Routing = () => {
	return (
		<Switch>
			<Route exact path="/" component={LoginContainer} />
			<Route path="/main" component={MainContainer} />
			<Route path="/write" component={WritingContainer} />
			<Route component={NotFoundContainer} />
		</Switch>
	);
};

export default Routing;
