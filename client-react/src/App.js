import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CustomerGrid from "./components/CustomerGrid";
import NewCustomer from "./components/NewCustomer";
import EditCustomer from "./components/EditCustomer";
import OrdersGrid from "./components/OrdersGrid";
import NewOrder from "./components/NewOrder";
import EditOrder from "./components/EditOrder";
import TotalsPerCustomer from "./components/TotalsPerCustomer";
import TotalsByDate from "./components/TotalsByDate";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import "./App.scss";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.hideSpinner = this.hideSpinner.bind(this);
  }
  
  componentDidMount() {
    this.hideSpinner();
  }
  
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 200)) // 2 seconds
  }
  
  hideSpinner = () => {
    this.authenticate().then(() => {
      const ele = document.getElementById("spinner");
      if(ele){
        // fade out
        ele.classList.add('available')

      }
    })
  }
  
  render() {
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
      <Route path="/reports/totalsbycustomer" component={TotalsPerCustomer} />
      <Route path="/reports/totalsbydate" component={TotalsByDate} />
      </Router>
      </div>
      );
    }
  }
  
  export default App;
  