import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { NotFound } from "../Pages/NotFound";

function App() {
  const isLogged = false;
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/">
            {!isLogged ? <Redirect to="/login" /> : <Home />}
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
