import React from "react";
import NewCustomer from "./components/NewCustomer";
import CustomerGrid from "./components/CustomerGrid";
import EditCustomer from "./components/EditCustomer";
import NewOrder from "./components/NewOrder";
import EditOrder from "./components/EditOrder";
import OrdersGrid from "./components/OrdersGrid";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import "./App.scss";

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
        <Route path="/editcustomer" component={EditCustomer} />
        <Route path="/editorder" component={EditOrder} />
      </Router>
    </div>
  );
}

export default App;
