import React from "react";
<<<<<<< Updated upstream
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginContainer from "./Containers/Login/LoginContainer";
=======

>>>>>>> Stashed changes
import WritingContainer from "./Containers/Writing/WritingContainer";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routing />
      <Switch>
        <Route path="/writing" component={WritingContainer} />
        <Route path="/login" component={LoginContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
