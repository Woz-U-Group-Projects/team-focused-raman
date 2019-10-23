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
    var x = document.getElementById("myTopnav");
    if(window.innerWidth <= 600) {
      pt.className = "";
      x.className = "topnav";
    } else {
      pt.className = "hidden";
    }
  }
  
  componentDidMount() {
    this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
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

//  closeMenu = (e) => {
//    this.setState({
//      pageTitle: e.target.innerHTML
//    }, function() {
//      var x = document.getElementById("myTopnav");
//      var pt = document.getElementById("pageTitle");
//      if (x.className === "navbar responsive") {
//        x.className = "navbar backgroundAnimated";
//        pt.className = "";
//      } else {
//        x.className = "navbar";
//        pt.className = "hidden";
//      }
//      console.log(this.state.pageTitle);
//    })
//  }

  closeDropdown = (e) => {
    let dropdownContent = document.getElementsByClassName("dropdown-content");
    let myTopnav = document.getElementById("myTopnav");
    
    for(var i = 0; i < dropdownContent.length; i++){
      dropdownContent[i].className = "dropdown-content hidden";
    }
    
    myTopnav.className = "topnav"

  }

  setDropdownsClick = (e) => {
    let dropdownContent = document.getElementsByClassName("dropdown-content");

    if(window.innerWidth <= 600) {
      if(e.target.nextSibling.className === "dropdown-content" || e.target.nextSibling.className === "dropdown-content hidden") {
        
        let dropdownContent = document.getElementsByClassName("dropdown-content");        
        for(var v = 0; v < dropdownContent.length; v++){
          dropdownContent[v].className = "dropdown-content";
        }

        e.target.nextSibling.className = "dropdown-content show";
      } else {
        e.target.nextSibling.className = "dropdown-content";      
      }
    } else {
      for(var i = 0; i < dropdownContent.length; i++){
        dropdownContent[i].className = "dropdown-content";
      }
    }
  }

  setDropdowns = (e) => {
    let dropdownContent = document.getElementsByClassName("dropdown-content");

    if(window.innerWidth <= 600) {
    } else {
      for(var i = 0; i < dropdownContent.length; i++){
        dropdownContent[i].className = "dropdown-content";
      }
    }
  }
  
  
  render() {
    return (
      <div className="topnav" id="myTopnav">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <div id="pageTitle"></div>

      <div className="dropdown">
      <button onClick={this.setDropdownsClick} onMouseEnter={this.setDropdowns} className="dropbtn">Customers&nbsp;&nbsp;
      <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
      <Link onClick={this.closeDropdown} to="/newcustomer">New Customer</Link>
      <Link onClick={this.closeDropdown} to="/customers">View Customers</Link>
      </div>
      </div>

      <div className="dropdown">
      <button onClick={this.setDropdownsClick} onMouseEnter={this.setDropdowns} className="dropbtn">Orders&nbsp;&nbsp;
      <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
      <Link onClick={this.closeDropdown} to="/neworder">New Order</Link>
      <Link onClick={this.closeDropdown} to="/orders">View Orders</Link>
      </div>
      </div> 

      <div className="dropdown">
      <button onClick={this.setDropdownsClick} onMouseEnter={this.setDropdowns} className="dropbtn">Reports&nbsp;&nbsp;
      <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
      <Link onClick={this.closeDropdown} to="/orders">Totals by Date</Link>
      <Link onClick={this.closeDropdown} to="/neworder">Totals by Customer</Link>
      </div>
      </div> 

      <button className="icon" onClick={this.myFunction}>&#9776;</button>
      </div>

      );
    }
  }
  export default Navbar;
  