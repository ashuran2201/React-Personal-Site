import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Index.jsx"
const Routes = () => {
    return (
      <div>
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
      </div>
    )
}
export default Routes;
