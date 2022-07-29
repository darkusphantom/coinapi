import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { NotFound } from "../Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Fragment>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route path="*" component={NotFound} />
        </Fragment>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
