import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
// import $ from 'jquery'; 

class editOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            orders: [],
            orderDetail: [],
            query: [],
            searchResults: "hidden",
            dataAvailable: "noData",
            activeOrder: "",
            activeCustomer: "",
            orderFound: "found"
        };
        this.newOrder = React.createRef();
        this.orderid = React.createRef();
        this.customerid = React.createRef();
        this.serviceDate = React.createRef();
        this.service = React.createRef();
        this.cu = React.createRef();
        this.pw = React.createRef();
        this.r = React.createRef();
        this.lr = React.createRef();
        this.misc = React.createRef();
        this.notes = React.createRef();
        
        // search
        this.returnedQuery = React.createRef();       
        this.searchResults = React.createRef();       
        this.searchResult = React.createRef();       
        this.searchInput = React.createRef();
        
        // bound functions
        this.enter = this.enter.bind(this);
        this.selectContents = this.selectContents.bind(this);
    }
    
    componentWillMount() {
        this.getData();
        this.getSearchData();
        // copied from edit customer
        var currentLocation = window.location.pathname;
        var thisOrder = currentLocation.substring(currentLocation.lastIndexOf('/') + 1);
        this.setState({
            activeOrder: thisOrder
        }, function() {
            this.getOrderDetail();
            this.getData();
        });
    }
    
    componentDidMount() {
    }
    
    showNoData = () => {
        if(this.state.orders.length >= 1) {
            this.setState({dataAvailable: "dataIsAvailable"})
        } else {
            this.setState({dataAvailable: "noData"})
        }
    }

    getInitialState(){
        return {searchResults:"hidden"};
    };
    
    hideResults = () => {
        this.setState({"searchResults":"hidden"});
    }
    
    showResults = () => {
        this.setState({"searchResults":"show"});
    }
    
    selectContents = (e) => {
        e.target.select();
    }
    
    searchThis = () => {
        if(this.searchInput.current.value === '') {
            this.hideResults();
            this.customerid.current.value = '';
        } else {
            this.showResults();
            let url = "http://localhost:8080/customersearchinput";
            axios.post(url, { 
                search: this.searchInput.current.value,            
            }).then(response => {
                this.getSearchData();
            });
            this.customerid.current.value = '';
        }
    };
    
    getOrderDetail = () => {
        // eslint-disable-next-line
        let url = "http://localhost:8080/orderdetail/" + `${this.state.activeOrder}`;
        axios.get(url)
        .then(response => {
            if(response.data === null) {
                this.setState({
                    orderFound: "notFound"
                })
            } else {
                let thisCustomer = "(#" + response.data.customerid + ") " + response.data.customerName;
                let responseArray = [];
                responseArray.push(response.data);
                this.setState({ 
                    orderDetail: responseArray,
                    orderFound: "found",
                    activeCustomer: thisCustomer
                }, function() {
                    this.showNoData();
                });
            }
        })
        .catch((err)=>{
            console.log(err);
        });
    };
    
    getData = () => {
        // eslint-disable-next-line
        let url = "http://localhost:8080/order/" + `${this.state.activeOrder}`;
        axios.get(url)
        .then(response => {
            if(response.data === null) {
                this.setState({
                    orderFound: "notFound"
                })
            } else {
                let responseArray = [];
                responseArray.push(response.data);
                this.setState({ 
                    orders: responseArray,
                    orderFound: "found"
                }, function() {
                    this.showNoData();
                });
            }
        })
        .catch((err)=>{
            console.log(err);
        });
    };
    
    getSearchData = () => {
        let url = "http://localhost:8080/customersearch";
        axios.get(url).then(response => this.setState({ query: response.data }));
    };
    
    enter = (e) => {
        this.searchInput.current.value = e.target.innerHTML;
        this.customerid.current.value = e.target.id;
        this.hideResults();
    };
    
    deleteOrder = (someOrder) => {
        // eslint-disable-next-line
        let url = "http://localhost:8080/order/" + `${someOrder}`
        axios.delete(url)
        //    .catch(function (error) {
        //      console.log("Deletion failed with error: " + error);
        //    })
        .then(response => {
            this.getData();
        })
    }
    
    addOrder = () => {
        let url = "http://localhost:8080/order";
        axios.post(url, { 
            customerid: this.customerid.current.value,
            serviceDate: this.serviceDate.current.value,
            service: this.service.current.value,
            cu: this.cu.current.value,
            pw: this.pw.current.value,
            r: this.r.current.value,
            lr: this.lr.current.value,
            misc: this.misc.current.value,
            notes: this.notes.current.value,     
        }).then(response => {
            // refresh the data
            this.getData();
            
            // empty the input            
            this.customerid.current.value = "";
            this.searchInput.current.value = "";
            this.serviceDate.current.value = "";
            this.service.current.value = "";
            this.cu.current.value = "";
            this.pw.current.value = "";
            this.r.current.value = "";
            this.lr.current.value = "";
            this.misc.current.value = "";
            this.notes.current.value = "";
            
        });
    };
    
    updateOrder = () => {
        // eslint-disable-next-line
        let url = "http://localhost:8080/order/" + `${this.orderid.current.value}`;
        axios.put(url, { 
            customerid: this.customerid.current.value,
            serviceDate: this.serviceDate.current.value,
            service: this.service.current.value,
            cu: this.cu.current.value,
            pw: this.pw.current.value,
            r: this.r.current.value,
            lr: this.lr.current.value,
            misc: this.misc.current.value,
            notes: this.notes.current.value,
        })
        .then(response => {
            // this.showSuccess();
            //            setTimeout( function() {
            //                console.log(this.props.history);
            //                window.location.replace("/customers");
            this.props.history.push('/orders');
            //            }, 1000)
        });
    }
    
    render() {
        
        return (
            <div ref={this.newOrder} className="customer">
            
            <div className={this.state.orderFound}>Order Not Found.</div>
            
            {this.state.orderDetail.map(p => (
                <form action="" key={this.state.activeCustomer}>
                <h3>Edit Order (#{p.orderid})</h3>
                
                <div className="field">
                <input onChange={this.searchThis} onFocus={this.selectContents} type="text" ref={this.searchInput} name="searchInput" id="searchInput" placeholder="Type to Search..." autoComplete="off" defaultValue={this.state.activeCustomer}/>
                <label htmlFor="searchInput">Customer</label>
                </div>
                
                <div className="field ">
                <input type="number" ref={this.customerid} name="customerid" id="customerid" placeholder="1" autoComplete="off" defaultValue={p.customerid}/>
                <label htmlFor="customerid">Customer ID</label>
                </div>
                
                <div className="field ">
                <input type="number" ref={this.orderid} name="orderid" id="orderid" placeholder="1" autoComplete="off" defaultValue={p.orderid}/>
                <label htmlFor="orderid">Order ID</label>
                </div>
                
                </form>
                ))
            }
            
            <div ref={this.searchResults} className={this.state.searchResults}>
            <div className="searchResults">
            
            {this.state.query.map(p => (
                <div ref={this.searchResult} className="customerSearchResult" key={p.returnedQuery} id={p.customerid} onClick={this.enter} >{p.returnedQuery}</div>
                ))
            }
            
            </div>
            </div>
            
            {this.state.orders.map(p => (
                <form action="" key={this.state.activeOrder}>
                
                
                <div className="field">
                <input type="text" ref={this.serviceDate} name="serviceDate" id="serviceDate" placeholder="01/01/2020" defaultValue={p.serviceDate}/>
                <label htmlFor="serviceDate">Service Date</label>
                </div>
                
                <div className="field">
                <select defaultValue={p.service} ref={this.service} name="service" id="service" >
                <option value="" disabled>Select...</option>
                <option value="MT">Mow/Trim</option>
                <option value="MTF">Mow/Trim (Front Yard)</option>
                <option value="MTB">Mow/Trim (Back Yard)</option>
                </select>
                <label htmlFor="service">Service</label>
                </div>
                
                <div className="field">
                <input type="number" ref={this.cu} name="cu" id="cu" placeholder="00" defaultValue={p.cu} />
                <label htmlFor="cu">Clean Up</label>
                </div>
                
                <div className="field">
                <input type="number" ref={this.pw} name="pw" id="pw" placeholder="00" defaultValue={p.pw} />
                <label htmlFor="pw">Pull Weeds</label>
                </div>
                
                <div className="field">
                <input type="number" ref={this.r} name="r" id="r" placeholder="00" defaultValue={p.r} />
                <label htmlFor="r">Rake</label>
                </div>
                
                <div className="field">
                <input type="number" ref={this.lr} name="lr" id="lr" placeholder="00" defaultValue={p.lr} />
                <label htmlFor="lr">Leaf Removal</label>
                </div>
                
                <div className="field">
                <input type="number" ref={this.misc} name="misc" id="misc" placeholder="00" defaultValue={p.misc} />
                <label htmlFor="misc">Misc. Labor</label>
                </div>
                
                <div className="field">
                <input type="text" ref={this.notes} name="notes" id="notes" placeholder="Enter a note..." defaultValue={p.notes} />
                <label htmlFor="notes">Notes</label>
                </div>
                
                <button type="button" onClick={this.updateOrder}>Update Order</button>
                
                </form>
                
                ))
            }
            
            </div>
            );
        }
    }
    
    export default withRouter(editOrder);
    