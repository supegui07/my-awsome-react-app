import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Application from "./components/Application/Application";
import "../client/styles/theme/global.scss";

ReactDom.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById("app")
);
