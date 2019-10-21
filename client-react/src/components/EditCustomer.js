import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import $ from 'jquery'; 


class EditCustomer extends React.Component {  
    constructor(props) {
        super(props);
        this.state = { customers: [],
            dataAvailable: "noData",
            pageTitle: "New Customer",
            activeCustomer: "",
            customerFound: "found"
        };
        this.customerid = React.createRef();
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
        this.updateCustomer = this.updateCustomer.bind(this);
    }
    
    componentWillMount() {
        //        console.log(currentLocation);
        var currentLocation = window.location.pathname;
        var thisCustomer = currentLocation.substring(currentLocation.lastIndexOf('/') + 1);
        this.setState({
            activeCustomer: thisCustomer
        }, function() {
            this.getData();
        });
        $("#restart").click(function () {
            $(".check-icon").hide();
            setTimeout(function () {
                $(".check-icon").show();
            }, 10);
        });
    }
    
    showNoData = () => {
        if(this.state.customers.length >= 1) {
            this.setState({dataAvailable: "dataIsAvailable"})
        } else {
            this.setState({dataAvailable: "noData"})
        }
    }
    
    getData = () => {
        // eslint-disable-next-line
        let url = "http://localhost:8080/customer/" + `${this.state.activeCustomer}`;
        axios.get(url)
        .then(response => {
            if(response.data === null) {
                this.setState({
                    customerFound: "notFound"
                })
            } else {
                let responseArray = [];
                responseArray.push(response.data);
                this.setState({ 
                    customers: responseArray,
                    customerFound: "found"
                }, function() {
                    this.showNoData();
                });
            }
        })
        .catch((err)=>{
            console.log(err);
        });
        //console.log(response);
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
    
    updateCustomer = () => {
        // eslint-disable-next-line
        let url = "http://localhost:8080/customer/" + `${this.customerid.current.value}`;
        axios.put(url, { 
            firstName: this.firstName.current.value,
            lastName: this.lastName.current.value,
            phone: this.phone.current.value,
            email: this.email.current.value,
            mtrate: this.mtrate.current.value,
            mtfrate: this.mtfrate.current.value,
            mtbrate: this.mtbrate.current.value,
            paymentType: this.paymentType.current.value,
            basis: this.basis.current.value,
            day: this.day.current.value,
        })
        .then(response => {
            this.showSuccess();
//            setTimeout( function() {
//                console.log(this.props.history);
//                window.location.replace("/customers");
                  this.props.history.push('/customers');
//            }, 1000)
        });
    }
    
    showSuccess = () => {
        var checkmark = document.getElementById("success-checkmark");
            checkmark.className = "success-checkmark"
    }

    render() {
        
        return (
            <div className="customer">
            
            <div className={this.state.customerFound}>Customer Not Found.</div>
            
            {this.state.customers.map(p => (
                <form key={p.customerid} action="">
                <h3>Edit Customer (#{p.customerid})</h3>
                
                <div className="field hidden">
                <input type="number" ref={this.customerid} name="customerid" id="customerid" placeholder="1" autoComplete="off" defaultValue={p.customerid}/>
                <label htmlFor="customerid">Customer ID</label>
                </div>
                
                <div className="field">
                <input type="text" ref={this.firstName} name="firstName" id="firstName" placeholder="Jane" defaultValue={p.firstName}/>
                <label htmlFor="firstName">First Name</label>
                </div>
                
                <div className="field">
                <input type="text" ref={this.lastName} name="lastName" id="lastName" placeholder="Appleseed" defaultValue={p.lastName}/>
                <label htmlFor="lastName">Last Name</label>
                </div>
                
                <div className="field">
                <input type="number" ref={this.phone} name="phone" id="phone" placeholder="(123) 456-7890" defaultValue={p.phone}/>
                <label htmlFor="phone">Phone</label>
                </div>
                
                <div className="field">
                <input type="text" ref={this.email} name="email" id="email" placeholder="jane.appleseed@icloud.com" defaultValue={p.email}/>
                <label htmlFor="email">Email</label>
                </div>
                
                <div className="field">
                <input type="number" ref={this.mtrate} name="mtrate" id="mtrate" placeholder="$100.00" defaultValue={p.mtrate}/>
                <label htmlFor="mtrate">Mow/Trim Rate</label>
                </div>
                
                <div className="field">
                <input type="number" ref={this.mtfrate} name="mtfrate" id="mtfrate" placeholder="$100.00" defaultValue={p.mtfrate}/>
                <label htmlFor="mtfrate">Front Yard Rate</label>
                </div>
                
                <div className="field">
                <input type="number" ref={this.mtbrate} name="mtbrate" id="mtbrate" placeholder="$100.00" defaultValue={p.mtbrate}/>
                <label htmlFor="mtbrate">Back Yard Rate</label>
                </div>
                
                <div className="field">
                <select ref={this.paymentType} name="paymentType" id="paymentType" defaultValue={p.paymentType}>
                <option value="" disabled>Select...</option>
                <option value="Cash">Cash</option>
                <option value="Credit">Credit</option>
                </select>
                <label htmlFor="paymentType">Payment Type</label>
                </div>
                
                <div className="field">
                <select ref={this.basis} name="basis" id="basis" defaultValue={p.basis}>
                <option value="" disabled>Select...</option>
                <option value="Weekly">Weekly</option>
                <option value="Bi-Weekly">Bi-Weekly</option>
                </select>
                <label htmlFor="basis">Basis</label>
                </div>
                
                <div className="field">
                <select ref={this.day} name="day" id="day" defaultValue={p.day}>
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
                
                <button type="button" onClick={this.updateCustomer}>Update Customer</button>
                
                </form>
                ))}
                
                <div id="success-checkmark" className="success-checkmark hidden">
                <div className="check-icon">
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
                </div>
                </div>
                
                </div>
                );
            }
        }
        
        export default withRouter(EditCustomer);
        