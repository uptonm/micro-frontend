import React from "react";
import {StylesProvider, createGenerateClassName} from "@material-ui/core/styles";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";

import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

const generateClassName = createGenerateClassName({
    productionPrefix: "mkt"
})

export const App = () => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
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