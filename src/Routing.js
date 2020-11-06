import React from "react";
import { Switch, Route } from "react-router-dom";
import ModalWrapperContainer from "./containers/ModalWrapper/ModalWrapperContainer";
import LoginContainer from "./containers/Login/LoginContainer";
import MainContainer from "./containers/Main/MainContainer";
import NotFoundContainer from "./containers/NotFound/NotFoundContainer";
import WritingContainer from "./containers/Writing/WritingContainer";

const Routing = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={LoginContainer} />
				<Route path="/main" component={MainContainer} />
				<Route path="/write" component={WritingContainer} />
				<Route component={NotFoundContainer} />
			</Switch>
			<ModalWrapperContainer />
		</>
	);
};

export default Routing;
