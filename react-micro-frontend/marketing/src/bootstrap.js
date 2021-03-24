console.log("Marketing Compiled Successfully");

import React from "react";
import ReactDOM from "react-dom";

import {App} from "./App";

/**
 * mount is a function used to allow locally running using the development
 * index.html file or the container html file (by exporting the function to
 * run within the container webpack bundle)
 *
 * @param {HTMLElement}  el - The element to mount the marketing app within
 */
const mount = (el) => {
    ReactDOM.render(<App />, el)
}

// If we are in development, and the selector exists, render the app
if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#marketing-root-dev")
    if (el) mount(el);
}

export {mount};