import React from "react";
import axios from "axios";
import edit from "../img/edit.png";
import editHover from "../img/editHover.png";
import deleteIcon from "../img/delete.png";
import deleteHover from "../img/deleteHover.png";

class CustomerGrid extends React.Component {  
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
    });
  };
  
  render() {
    
    return (
      <div className="customer"> 
      <h3>Customers</h3>
      <div className="grid">
      <table className="gridTable">
      <tbody>
      <tr>
      <th>Customer ID</th>
      <th>Customer Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>MT Rate</th>
      <th>MTF</th>
      <th>MTB</th>
      <th>Payment Type</th>
      <th>Basis</th>
      <th>Day</th>
      <th>Action</th>
      </tr>
      {this.state.customers.map(p => (
        <tr key={p.customerid}>
        <td>{p.customerid}</td>
        <td>{p.firstName} {p.lastName}</td>
        <td>{p.phone}</td>
        <td>{p.email}</td>
        <td>{p.mtrate}</td>
        <td>{p.mtfrate}</td>
        <td>{p.mtbrate}</td>
        <td>{p.paymentType}</td>
        <td>{p.basis}</td>
        <td>{p.day}</td>
        <td>
        <div className="gridAction">
        <span title="Edit Customer"><img alt="edit" className="visible actionEdit" src={edit} /></span>
        <span title="Edit Customer"><img alt="edit" className="hiddenIcon actionEdit" src={editHover} /></span>
        <span title="Delete Customer"><img alt="delete" className="visible actionDelete" src={deleteIcon} /></span>
        <span onClick={() => this.deleteCustomer(p.customerid)} title="Delete Customer"><img alt="delete" className="hiddenIcon actionDelete" src={deleteHover} /></span>
        </div>
        </td>
        </tr>
        ))}
        <tr className={this.state.dataAvailable}>
        <td colSpan="11">No Data Available.</td>
        </tr>
        </tbody>
        </table>
        </div>
        </div>
        );
      }
    }
    
    export default CustomerGrid;
    