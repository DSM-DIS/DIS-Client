import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WritingContainer from "./Containers/Writing/WritingContainer";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routing />
      <Switch>
        <Route path="/writing" component={WritingContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
