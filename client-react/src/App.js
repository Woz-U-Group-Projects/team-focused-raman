import React from "react";
import NewCustomer from "./components/NewCustomer";
import CustomerGrid from "./components/CustomerGrid";
import NewOrder from "./components/NewOrder";
import OrdersGrid from "./components/OrdersGrid";
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
        <Route path="/customers" component={CustomerGrid} />
        <Route path="/newcustomer" component={NewCustomer} />
        <Route path="/orders" component={OrdersGrid} />
        <Route path="/neworder" component={NewOrder} />
      </Router>

      
    </div>
  );
}

export default App;
