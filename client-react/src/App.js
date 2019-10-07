import React from "react";
import Project from "./components/Project";
import NewCustomer from "./components/NewCustomer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <div className="App">
     <Header /> 
      <Router>
        <Navbar />
      </Router>

      <NewCustomer />
    </div>
  );
}

export default App;
