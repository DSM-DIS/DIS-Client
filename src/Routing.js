import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Components/Main/Main';

const Routing = () => {
	return (
		<Switch>
			<Route path="/main" component={Main} />
		</Switch>
	);
};

export default Routing;
