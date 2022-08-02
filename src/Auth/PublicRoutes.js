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

