import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return <div>My Awsome React App</div>
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
)