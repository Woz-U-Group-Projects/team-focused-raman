import React from "react";
import axios from "axios";
import edit from "../img/edit.png";
import editHover from "../img/editHover.png";
import deleteIcon from "../img/delete.png";
import deleteHover from "../img/deleteHover.png";

class NewCustomer extends React.Component {
  
  //  handleOnChange(value) {
  //    this.setState({ phone: value })
  //  }
  
  constructor(props) {
    super(props);
    this.state = { customers: [],
      dataAvailable: "dataIsAvailable"
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
      <h3>New Customer</h3>
      
      <form action="">
      
      <div className="field">
      <input type="text" ref={this.firstName} name="firstName" id="firstName" placeholder="Jane" />
      <label htmlFor="firstName">First Name</label>
      </div>
      
      <div className="field">
      <input type="text" ref={this.lastName} name="lastName" id="lastName" placeholder="Appleseed" />
      <label htmlFor="lastName">Last Name</label>
      </div>
      
      <div className="field">
      <input type="number" ref={this.phone} name="phone" id="phone" placeholder="(123) 456-7890" />
      <label htmlFor="phone">Phone</label>
      </div>
      
      <div className="field">
      <input type="text" ref={this.email} name="email" id="email" placeholder="jane.appleseed@icloud.com" />
      <label htmlFor="email">Email</label>
      </div>
      
      <div className="field">
      <input type="number" ref={this.mtrate} name="mtrate" id="mtrate" placeholder="$100.00" />
      <label htmlFor="mtrate">Mow/Trim Rate</label>
      </div>
      
      <div className="field">
      <input type="number" ref={this.mtfrate} name="mtfrate" id="mtfrate" placeholder="$100.00" />
      <label htmlFor="mtfrate">Front Yard Rate</label>
      </div>
      
      <div className="field">
      <input type="number" ref={this.mtbrate} name="mtbrate" id="mtbrate" placeholder="$100.00" />
      <label htmlFor="mtbrate">Back Yard Rate</label>
      </div>
      
      <div className="field">
      <select defaultValue="" ref={this.paymentType} name="paymentType" id="paymentType" >
        <option value="" disabled>Select...</option>
        <option value="Cash">Cash</option>
        <option value="Credit">Credit</option>
      </select>
      <label htmlFor="paymentType">Payment Type</label>
      </div>

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
      
      <button type="button" onClick={this.addCustomer}>Save Customer</button>
      
      </form>
      
      
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
        <span title="Delete Customer"><img alt="delete" className="hiddenIcon actionDelete" src={deleteHover} /></span>
        
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
    
    export default NewCustomer;
    