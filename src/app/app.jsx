import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Main from "./components/main";
import Login from "./components/login";
import Users from "./components/users";
import User from "./components/user";

const App = () => {
   return (
      <>
         <NavBar />
         <Switch>
            <Route path="/login" component={Login} />
            <Route path="/users/:id" component={User} />
            <Route path="/users" component={Users} />
            <Route path="/" component={Main} />
         </Switch>
      </>
   );
};

export default App;
