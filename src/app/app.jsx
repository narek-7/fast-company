import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
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
