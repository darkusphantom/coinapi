import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { NotFound } from "../Pages/NotFound";
import { useUserLogged } from "../Hooks/useUserLogged";

function App() {
  const { states } = useUserLogged();
  const { userData: user } = states;
  console.log(user, user.isLogged);

  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/">
            {user.isLogged ? <Redirect to="/home" /> : <Login />}
          </Route>
          <Route exact path="/login">
            {user.isLogged ? <Redirect to="/home" /> : <Login />}
          </Route>
          <Route exact path="/register">
            {user.isLogged ? <Redirect to="/home" /> : <Register />}
          </Route>
          <Route exact path="/home" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
