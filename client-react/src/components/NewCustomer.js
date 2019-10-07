import React from "react";
import axios from "axios";

class NewCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { customers: []
    };
    this.firstName = React.createRef();
    this.lastName = React.createRef();
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
     }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.firstName.current.value = "";
      this.lastName.current.value = "";
    });
  };

  render() {
    return (
      <div>
        <h3>Customers</h3>
        <input placeholder="First Name" ref={this.firstName} />
        <input placeholder="Last Name" ref={this.lastName} />
        <button onClick={this.addCustomer}>add</button>
        <table>
            <tbody>

                <tr>
                    <th>Customer ID</th>
                    <th>First Name</th>
                    <th>Last name</th>
                </tr>
          
          {this.state.customers.map(p => (
            <tr key={p.customerid}>
              <td>{p.customerid}</td>
              <td>{p.firstName}</td>
              <td>{p.lastName}</td>
            </tr>
          ))}

            </tbody>
        </table>
      </div>
    );
  }
}

export default NewCustomer;
