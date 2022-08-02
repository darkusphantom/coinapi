import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { NotFound } from "../Pages/NotFound";
import { useUserLogged } from "../Hooks/useUserLogged";

function App() {
  let isLogged = false;
  //const { states } = useUserLogged();
  //const { userData: user } = states;
  const redirectRoute = (route, component) =>
    isLogged ? <Redirect to={route} /> : component;

  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/">
            {redirectRoute("/home", <Login />)}
            <Login />
          </Route>
          <Route exact path="/login">
            {redirectRoute("/home", <Login />)}
          </Route>
          <Route exact path="/register">
            {redirectRoute("/home", <Register />)}
          </Route>
          <Route exact path="/home">
            {redirectRoute("/login", <Login />)}
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
