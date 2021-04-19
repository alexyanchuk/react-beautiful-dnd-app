import React from "react";
import ReactDOM from "react-dom";
import SimpleApp from "./views/SimpleApp";
import PaginagionApp from "./views/PaginagionApp";
import "./index.module.scss";

ReactDOM.render(
    <div className="app">
        <SimpleApp />
        {/* <PaginagionApp /> */}
    </div>,
    document.getElementById("app"),
);
