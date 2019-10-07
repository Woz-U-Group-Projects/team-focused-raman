import React from "react";
import axios from "axios";

class NewCustomer extends React.Component {
  
  handleOnChange(value) {
    this.setState({ phone: value })
  }

  constructor(props) {
    super(props);
    this.state = { customers: []
    };
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.mtrate = React.createRef();
    this.mtfrate = React.createRef();
    this.mtbrate = React.createRef();
    this.paymentType = React.createRef();
    this.basis = React.createRef();
    this.day = React.createRef();
    this.phoneField = React.createRef();
    
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/customer";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    //let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ customers: response.data }));
  };

  addCustomer = () => {

      let url = "http://localhost:8080/customer";
      axios.post(url, { 
          firstName: this.firstName.current.value,
          lastName: this.lastName.current.value,
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
            <input type="text" ref={this.firstName} name="firstName" id="firstName" placeholder="Jane" required />
            <label htmlFor="firstName">First Name</label>
          </div>
  
          <div className="field">
            <input type="text" ref={this.lastName} name="lastName" id="lastName" placeholder="Appleseed" required />
            <label htmlFor="lastName">Last Name</label>
          </div>

          <div className="field">
            <input type="numerical" ref={this.phone} name="phone" id="phone" placeholder="(123) 456-7890" />
            <label htmlFor="phone">Phone</label>
          </div>

          <div className="field">
            <input type="numerical" ref={this.mtrate} name="mtrate" id="mtrate" placeholder="$100.00" required />
            <label htmlFor="mtrate">Mow/Trim Rate</label>
          </div>

          <div className="field">
            <input type="numerical" ref={this.mtfrate} name="mtfrate" id="mtfrate" placeholder="$100.00" />
            <label htmlFor="mtfrate">Front Yard Rate</label>
          </div>

          <div className="field">
            <input type="numerical" ref={this.mtbrate} name="mtbrate" id="mtbrate" placeholder="$100.00" />
            <label htmlFor="mtbrate">Back Yard Rate</label>
          </div>

          <div className="field">
            <input type="text" ref={this.paymentType} name="paymentType" id="paymentType" placeholder="Cash" />
            <label htmlFor="paymentType">Payment Type</label>
          </div>

          <div className="field">
            <input type="text" ref={this.basis} name="basis" id="basis" placeholder="Weekly" />
            <label htmlFor="basis">Basis</label>
          </div>

          <div className="field">
            <input type="text" ref={this.day} name="day" id="day" placeholder="Monday" />
            <label htmlFor="day">Day</label>
          </div>
          
        <button action="button" onClick={this.addCustomer}>Save Customer</button>
        
        </form>

        
        <h3>Customers</h3>

        <table>
            <tbody>

                <tr>
                    <th>Customer ID</th>
                    <th>Customer Name</th>
                    <th>MT / MTF / MTB</th>
                    <th>Payment Type</th>
                    <th>Basis</th>
                    <th>Day</th>
                </tr>
          
          {this.state.customers.map(p => (

            <tr key={p.customerid}>
              <td>{p.customerid}</td>
              <td>{p.firstName} {p.lastName}</td>
              <td>{p.mtrate} / {p.mtfrate} / {p.mtbrate}</td>
              <td>{p.paymentType}</td>
              <td>{p.basis}</td>
              <td>{p.day}</td>
            </tr>
          ))}

            </tbody>
        </table>
      </div>
    );
  }
}

export default NewCustomer;
