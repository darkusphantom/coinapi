import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { NotFound } from "../Pages/NotFound";
//import { useUserLogged } from "../Hooks/useUserLogged";
import { ProvideAuth } from "./ProvideAuth";

function App() {
  //const { states } = useUserLogged();
  //const { userData: user } = states;
  /*const redirectRoute = (route, component) =>
    isLogged ? <Redirect to={route} /> : component;*/

  return (
    <ProvideAuth>
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </ProvideAuth>
  );
}

export default App;
