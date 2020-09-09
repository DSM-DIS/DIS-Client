import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginContainer from "./Containers/Login/LoginContainer";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routing />
      <Switch>
        <Route path="/login" component={LoginContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
