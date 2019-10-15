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
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  toggleResponsive = (e) => {
    var x = document.getElementById("myTopnav");
    var pt = document.getElementById("pageTitle");
    if(x.className === "topnav responsive" || x.className === "topnav responsive backgroundAnimated") {
      x.className = "topnav";
      pt.className = "";
    } else {
      x.className = "topnav responsive";
      pt.className = "hidden";
    }
  }
  
  closeMenu = (e) => {
    this.setState({
      pageTitle: e.target.innerHTML
    }, function() {
      var x = document.getElementById("myTopnav");
      var pt = document.getElementById("pageTitle");
      if (x.className === "topnav responsive") {
        x.className = "topnav backgroundAnimated";
        pt.className = "";
      } else {
        x.className = "topnav";
        pt.className = "hidden";
      }
      console.log(this.state.pageTitle);
    })

  }
  


  render() {
    return (
      <div className="topnav" ref={this.topNav} id="myTopnav">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      
      <div id="pageTitle" ref={this.pageTitle}>{this.state.pageTitle}</div>
      <Link onClick={this.closeMenu} to="/orders">Orders</Link>
      <Link onClick={this.closeMenu} to="/customers">Customers</Link>
      
      <button className="icon" onClick={this.toggleResponsive}>
      <i className="fa fa-bars"></i>
      </button>
      </div>
      );
    }
  }
  export default Navbar;
  