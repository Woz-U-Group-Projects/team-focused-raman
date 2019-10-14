import React from "react";
import NewCustomer from "./components/NewCustomer";
import NewOrder from "./components/NewOrder";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CustomerSearch from "./components/CustomerSearch";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <div className="App">
     <Header /> 
      <Router>
        <Navbar />
        <Route path="/customers" component={NewCustomer} />
        <Route path="/orders" component={NewOrder} />
        <Route path="/customersearch" component={CustomerSearch} />
      </Router>

      
    </div>
  );
}

export default App;
