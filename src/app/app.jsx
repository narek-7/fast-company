import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Main from "./components/main";
import Login from "./components/login";
import Users from "./components/users";
import User from "./components/user";
import ErrorPage from "./components/errorPage";

const App = () => {
   return (
      <>
         <NavBar />
         <Switch>
            <Route path="/login" component={Login} />
            <Route path="/users/:id" component={User} />
            <Route path="/users" component={Users} />
            <Route path="/" exact component={Main} />
            <Route path="/404" exact component={ErrorPage} />
            <Redirect to="/404" />
         </Switch>
      </>
   );
};

export default App;
