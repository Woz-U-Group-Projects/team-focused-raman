import React from "react";
import axios from "axios";

class NewCustomer extends React.Component {  
  constructor(props) {
    super(props);
    this.state = { customers: [],
      dataAvailable: "noData",
      pageTitle: "New Customer",
      deleteCustomer: "Jeff"
    };
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.email = React.createRef();
    this.phone = React.createRef();
    this.mtrate = React.createRef();
    this.mtfrate = React.createRef();
    this.mtbrate = React.createRef();
    this.paymentType = React.createRef();
    this.basis = React.createRef();
    this.day = React.createRef();
    this.phoneField = React.createRef();
    
    this.deleteCustomer = this.deleteCustomer.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }
  
  componentWillMount() {
    this.getData();
  }
  
  showNoData = () => {
    if(this.state.customers.length >= 1) {
      this.setState({dataAvailable: "dataIsAvailable"})
    } else {
      this.setState({dataAvailable: "noData"})
    }
  }
  
  getData = () => {
    let url = "http://localhost:8080/customer";
    axios.get(url).then(response => this.setState({ customers: response.data }, function() {
      this.showNoData();
    }));
  };
  
  deleteCustomer = (someone) => {
    // eslint-disable-next-line
    let url = "http://localhost:8080/customer/" + `${someone}`
    axios.delete(url)
    //    .catch(function (error) {
    //      console.log("Deletion failed with error: " + error);
    //    })
    .then(response => {
      this.getData();
    })
  }
  
  addCustomer = () => {
    let url = "http://localhost:8080/customer";
    axios.post(url, { 
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      email: this.email.current.value,
      phone: this.phone.current.value,
      mtrate: this.mtrate.current.value,
      mtfrate: this.mtfrate.current.value,
      mtbrate: this.mtbrate.current.value,
      paymentType: this.paymentType.current.value,
      basis: this.basis.current.value,
      day: this.day.current.value,
    }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.firstName.current.value = "";
      this.lastName.current.value = "";
      this.email.current.value = "";
      this.phone.current.value = "";
      this.mtrate.current.value = "";
      this.mtfrate.current.value = "";
      this.mtbrate.current.value = "";
      this.paymentType.current.value = "";
      this.basis.current.value = "";
      this.day.current.value = "";

      this.props.history.push('/customers');

    });
  };
  
  validateForm = () => {
    this.validateFirstName();
    this.validateLastName();
    this.validateMowTrim();
    this.validatePaymentType();

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let mtrate = document.getElementById("mtrate");
    let paymentType = document.getElementById("paymentType");

    if(
      firstName.value === "" ||
      lastName.value === "" ||
      mtrate.value === "" ||
      paymentType.value === ""
    ) {
      console.log("You CANNOT submit this form!")
    } else {
      this.addCustomer();
    }
  }

  validateFirstName = () => {
    let firstName = document.getElementById("firstName");
    let firstNameErr = document.getElementById("firstNameErr");
    if(firstName.value === "") {
      firstNameErr.className = "errorMessage";
      firstName.className = "formValidate";
    } else {
      firstNameErr.className = "errorMessage hidden";
      firstName.className = "";
    }
  }

  validateLastName = () => {
    let lastName = document.getElementById("lastName");
    let lastNameErr = document.getElementById("lastNameErr");
    if(lastName.value === "") {
      lastNameErr.className = "errorMessage";
      lastName.className = "formValidate";
    } else {
      lastNameErr.className = "errorMessage hidden";
      lastName.className = "";
    }
  }

  validateMowTrim = () => {
    let mtrate = document.getElementById("mtrate");
    let mtErr = document.getElementById("mtErr");
    if(mtrate.value === "") {
      mtErr.className = "errorMessage";
      mtrate.className = "formValidate";
    } else {
      mtErr.className = "errorMessage hidden";
      mtrate.className = "";
    }
  }

  validatePaymentType = () => {
    let paymentType = document.getElementById("paymentType");
    let paymentTypeErr = document.getElementById("paymentTypeErr");
    if(paymentType.value === "") {
      paymentTypeErr.className = "errorMessage";
      paymentType.className = "formValidate";
    } else {
      paymentTypeErr.className = "errorMessage hidden";
      paymentType.className = "";
    }
  }

  render() {
    
    return (
      <div className="customer">
      <h3>New Customer</h3>
      
      <form action="">
      
      <div className="field">
      <input onChange={this.validateFirstName} type="text" ref={this.firstName} name="firstName" id="firstName" placeholder="Jane" />
      <label htmlFor="firstName">First Name</label>
      </div>
      
      <div id="firstNameErr" className="errorMessage hidden">Please enter first name.</div>

      <div className="field">
      <input onChange={this.validateLastName} type="text" ref={this.lastName} name="lastName" id="lastName" placeholder="Appleseed" />
      <label htmlFor="lastName">Last Name</label>
      </div>
      
      <div id="lastNameErr" className="errorMessage hidden">Please enter last name.</div>

      <div className="field">
      <input type="number" ref={this.phone} name="phone" id="phone" placeholder="(123) 456-7890" />
      <label htmlFor="phone">Phone</label>
      </div>
      
      <div className="field">
      <input type="text" ref={this.email} name="email" id="email" placeholder="jane.appleseed@icloud.com" />
      <label htmlFor="email">Email</label>
      </div>
      
      <div className="field">
      <input onChange={this.validateMowTrim} type="number" ref={this.mtrate} name="mtrate" id="mtrate" placeholder="$100.00" />
      <label htmlFor="mtrate">Mow/Trim Rate</label>
      </div>
      
      <div id="mtErr" className="errorMessage hidden">Please enter mow/trim rate.</div>

      <div className="field">
      <input type="number" ref={this.mtfrate} name="mtfrate" id="mtfrate" placeholder="$100.00" />
      <label htmlFor="mtfrate">Front Yard Rate</label>
      </div>
      
      <div className="field">
      <input type="number" ref={this.mtbrate} name="mtbrate" id="mtbrate" placeholder="$100.00" />
      <label htmlFor="mtbrate">Back Yard Rate</label>
      </div>
      
      <div className="field">
      <select onChange={this.validatePaymentType} defaultValue="" ref={this.paymentType} name="paymentType" id="paymentType" >
      <option value="" disabled>Select...</option>
      <option value="Cash">Cash</option>
      <option value="Credit">Credit</option>
      </select>
      <label htmlFor="paymentType">Payment Type</label>
      </div>

      <div id="paymentTypeErr" className="errorMessage hidden">Please choose a payment type.</div>
      
      <div className="field">
      <select defaultValue="" ref={this.basis} name="basis" id="basis" >
      <option value="" disabled>Select...</option>
      <option value="Weekly">Weekly</option>
      <option value="Bi-Weekly">Bi-Weekly</option>
      </select>
      <label htmlFor="basis">Basis</label>
      </div>

      <div className="field">
      <select defaultValue="" ref={this.day} name="day" id="day" >
      <option value="" disabled>Select...</option>
      <option value="Monday">Monday</option>
      <option value="Tuesday">Tuesday</option>
      <option value="Wednesday">Wednesday</option>
      <option value="Thursday">Thursday</option>
      <option value="Friday">Friday</option>
      <option value="Saturday">Saturday</option>
      <option value="Sunday">Sunday</option>
      </select>
      <label htmlFor="day">Day</label>
      </div>
      <button type="button" onClick={this.validateForm}>Save Customer</button>
      </form>
        </div>
        );
      }
    }
    
    export default NewCustomer;
    