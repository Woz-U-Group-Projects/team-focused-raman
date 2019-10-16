import React from "react";
import axios from "axios";

function validate(name, email) {
  // we are going to store errors for all fields
  // in a signle array
  const errors = [];

  if (firstName.length === 0) {
    errors.push("Name can't be empty");
  }
  if (lastName.length === 0) {
    errors.push("Name can't be empty");
  }

  if (email.length < 5) {
    errors.push("Email should be at least 5 charcters long");
  }
  if (email.split("").filter(x => x === "@").length !== 1) {
    errors.push("Email should contain a @");
  }
  if (email.indexOf(".") === -1) {
    errors.push("Email should contain at least one dot");
  }

  return errors;
}


class NewCustomer extends React.Component {
  
  handleOnChange(value) {
    this.setState({ phone: value })
  }

  constructor(props) {
    super(props);this.state = {
      firstName: "",
      lastName: "",
      email: "",

      errors: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { firstName, lastName, email } = this.state;

    const errors = validate(firstName, lastName, email);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    this.state = { customers: []
    };
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.email = React.createRef();
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
          email: this.email.current.value,
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
        
        <form onSubmit={this.handleSubmit} action="">
        {errors.map(error => (
          <p key={error}>Error: {error}</p>
        ))}

          <div className="field">
          <input
          value={this.state.firstName}
          onChange={evt => this.setState({ firstName: evt.target.value })}
          type="text"
          placeholder="firstName"
        />
          </div>
  
          <div className="field">
          <input
          value={this.state.lastName}
          onChange={evt => this.setState({ lastName: evt.target.value })}
          type="text"
          placeholder="lastName"
        />
          </div>

          <div className="field">
            <input type="numerical" ref={this.phone} name="phone" id="phone" placeholder="(123) 456-7890" />
            <label htmlFor="phone">Phone</label>
          </div>
          <div>
          <input
          value={this.state.email}
          onChange={evt => this.setState({ email: evt.target.value })}
          type="text"
          placeholder="Email"
        />
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
                    <th>Email</th>
                    <th>MT / MTF / MTB</th>
                    <th>Payment Type</th>
                    <th>Basis</th>
                    <th>Day</th>
                </tr>
          
          {this.state.customers.map(p => (

            <tr key={p.customerid}>
              <td>{p.customerid}</td>
              <td>{p.firstName} {p.lastName}</td>
              <td>{p.email}</td>
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
ReactDOM.render(<NewCustomer />, rootElement);