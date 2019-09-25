import React from "react";
import Project from "./Project";
import Header from "./Header";
import Orders from "./Orders";
import NewCustomer from "./NewCustomer";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
            <Header />      
            <Route exact path="/" component={Orders} />
            <Route path="/orders" component={Orders} />
            <Route path="/new-customer" component={NewCustomer} />
      </Router>
      <Project />
    </div>
  );
}

export default App;
