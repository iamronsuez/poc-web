import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import appRoutes from "./pages/index";

const { Home, About, Contact, Admin } = appRoutes;


const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
