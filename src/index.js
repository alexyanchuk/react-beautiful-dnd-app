import React from "react";
import ReactDOM from "react-dom";
import SimpleApp from "./views/SimpleApp";
import "./index.module.scss";

ReactDOM.render(
    <div className="app">
        <SimpleApp />
    </div>,
    document.getElementById("app"),
);
