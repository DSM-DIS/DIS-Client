import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import LoginContainer from './Containers/Login/LoginContainer';
import WritingContainer from './Containers/Writing/WritingContainer';

const Routing = () => {
	return (
		<Switch>
			<Route exact path="/" component={LoginContainer} />
			<Route path="/main" component={Main} />
			<Route path="/write" component={WritingContainer} />
		</Switch>
	);
};

export default Routing;
