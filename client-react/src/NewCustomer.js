import React from 'react';
import axios from 'axios';
import './App.css';

export default class NewCustomer extends React.Component {
    state = {
        // title: '',
        firstName: '',
        // lastName: '',
        // email: '',
        // address1: '',
        // address2: '',
        // city: '',
        // state: '',
        // zip: '',
        // mtRate: '',
        // mtfRate: '',
        // mtbRate: ''
    }
    
    handleChange = event => {
        this.setState({
            firstName: event.target.value,
        });
    }
    
    handleSubmit = event => {
        event.preventDefault(); 
        
        
        // Begin PASTE of Vaiden's Example
        
        var data = {
            firstName: this.state.firstName,
         //   email: this.state.email
        }
        console.log(data)
        fetch("http://localhost:8080/api/new-customer", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data)    
            if(data === "success"){
                this.setState({msg: "Thanks for registering"});  
            }
        }).catch(function(err) {
            console.log(err)
        });
        
    };
    //     // end PASTE of Vaiden's example
        
    //     const user = {
    //         // title: this.state.title,
    //         firstName: this.state.firstName,
    //         // lastName: this.state.lastName,
    //         // email: this.state.email,
    //         // address1: this.state.address1,
    //         // address2: this.state.address2,
    //         // city: this.state.city,
    //         // state: this.state.state,
    //         // zip: this.state.zip,
    //         // mtRate: this.state.mtRate,
    //         // mtfRate: this.state.mtfRate,
    //         // mtbRate: this.state.mtbRate
    //     }
        
    //     axios.post(`http://localhost:8080/api/new-customer`, { user })
    //     .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //     });
    // }
    
    render() {
        return (
            
            <div className="newCustomerContainer">
            <form onSubmit={this.handleSubmit}>
            {/* <input type="text" placeholder="Title" name="title" id="title" /> */}
            <input type="text" placeholder="First Name" name="firstName" id="firstName" />
            {/* <input type="text" placeholder="Last Name" name="lastName" id="lastName" />
            <input type="text" placeholder="Email Address" name="email" id="email" />
            <input type="text" placeholder="Address 1" name="address1" id="address1" />
            <input type="text" placeholder="Address 2" name="address2" id="address2" />
            <input type="text" placeholder="City" name="city" id="city" />
            <input type="text" placeholder="State" name="state" id="state" />
            <input type="text" placeholder="ZIP Code" name="zip" id="zip" />
            <input type="text" placeholder="MT Rate" name="mtRate" id="mtRate" />
            <input type="text" placeholder="MTF Rate" name="mtfRate" id="mtfRate" />
            <input type="text" placeholder="MTB Rate" name="mtbRate" id="mtbRate" />
             */}
            <button type="submit">Submit</button>
            </form>
            </div>
            )
        }
    }