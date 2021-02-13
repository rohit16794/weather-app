import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import GetWeather from "./components/get-weather";

function App() {
  return (
    <Router>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark" style={{marginBottom: "20px"}}>

          <Link to="/" className="navbar-brand">Weather application</Link>
        </nav>

      <Route path="/" exact component={GetWeather} />      
    </Router>
      );
}

export default App;