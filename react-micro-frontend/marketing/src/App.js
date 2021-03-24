import React from "react";
import {StylesProvider} from "@material-ui/core/styles";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";

import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

export const App = () => {
    return (
        <div>
            <StylesProvider>
                <Router>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route path="/" component={Landing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}