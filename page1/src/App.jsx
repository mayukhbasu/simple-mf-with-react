import React from "react";
import ReactDOM from "react-dom";
import Details from "./Details";

import "./index.css";

const App = () => (
  <div className="container">
    <div className="row">
      <Details/>
    </div>
    
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
