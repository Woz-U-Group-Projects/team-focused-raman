import React from "react";
import NewCustomer from "./components/NewCustomer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <div className="App">
     <Header /> 
      <Router>
        <Navbar />
        <Route path="/customers" component={NewCustomer} />
      </Router>

      
    </div>
  );
}

export default App;
