import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Navbar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      navigation: "standard",
      pageTitle: ""
    };
    this.topNav = React.createRef();
    this.pageTitle = React.createRef();
    
    this.myFunction = this.myFunction.bind(this);
  }
  
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  componentWillMount() {
    var currentLocation = window.location.pathname;
    if(currentLocation === "/orders"){
      this.setState({
        pageTitle: "Orders"
      })
    }
    if(currentLocation === "/customers"){
      this.setState({
        pageTitle: "Customers"
      })
    }
  }
  
  updateDimensions() {
    var pt = document.getElementById("pageTitle");
    if(window.innerWidth <= 600) {
      pt.className = "";
    } else {
      pt.className = "hidden";
    }
  }
  
  componentDidMount() {
    //    this.updateDimensions();
    //    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
  
  toggleResponsive = (e) => {
    var x = document.getElementById("myTopnav");
    var pt = document.getElementById("pageTitle");
    if(x.className === "navbar responsive" || x.className === "navbar responsive backgroundAnimated") {
      x.className = "navbar";
      pt.className = "";
    } else {
      x.className = "navbar responsive";
      pt.className = "hidden";
    }
  }

  closeMenu = (e) => {
    this.setState({
      pageTitle: e.target.innerHTML
    }, function() {
      var x = document.getElementById("myTopnav");
      var pt = document.getElementById("pageTitle");
      if (x.className === "navbar responsive") {
        x.className = "navbar backgroundAnimated";
        pt.className = "";
      } else {
        x.className = "navbar";
        pt.className = "hidden";
      }
      console.log(this.state.pageTitle);
    })
    
  }
  
  
  
  render() {
    return (
      <div className="topnav" id="myTopnav">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <div id="pageTitle"></div>

      <div className="dropdown">
      <button className="dropbtn">Customers&nbsp;&nbsp;
      <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
      <Link to="/newcustomer">New Customer</Link>
      <Link to="/customers">View Customers</Link>
      </div>
      </div>

      <div className="dropdown">
      <button className="dropbtn">Orders&nbsp;&nbsp;
      <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
      <Link to="/neworder">New Order</Link>
      <Link to="/orders">View Orders</Link>
      </div>
      </div> 

      <div className="dropdown">
      <button className="dropbtn">Reports&nbsp;&nbsp;
      <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
      <Link to="/orders">Totals by Date</Link>
      <Link to="/neworder">Totals by Customer</Link>
      </div>
      </div> 

      <button className="icon" onClick={this.myFunction}>&#9776;</button>
      </div>

      );
    }
  }
  export default Navbar;
  