import React from "react";
import {StylesProvider, createGenerateClassName} from "@material-ui/core/styles";
import {BrowserRouter as Router} from "react-router-dom";

import Header from "./components/Header";
import {MarketingApp} from "./components/MarketingApp";

const generateClassName = createGenerateClassName({
    productionPrefix: "co"
})

export const App = () => {
    return (
        <Router>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </StylesProvider>
        </Router>
    )
}