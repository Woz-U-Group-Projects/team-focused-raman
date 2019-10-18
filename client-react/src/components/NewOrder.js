import React from "react";
import axios from "axios";

class NewOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            orders: [],
            query: [],
            searchResults: "hidden",
            dataAvailable: "noData"
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
    
    getData = () => {
        let url = "http://localhost:8080/orderdetail";
        axios.get(url).then(response => this.setState({ orders: response.data },function() {
            this.showNoData();
        }));
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
    
    render() {
        
        return (
            <div ref={this.newOrder} className="customer">
            <h3>New Order</h3>
            
            <form action="">
            
            <div className="field">
            <input onChange={this.searchThis} onFocus={this.selectContents} type="text" ref={this.searchInput} name="searchInput" id="searchInput" placeholder="Type to Search..." autoComplete="off" />
            <label htmlFor="searchInput">Customer</label>
            </div>
            
            <div className="field hidden">
            <input type="number" ref={this.customerid} name="customerid" id="customerid" placeholder="1" autoComplete="off" />
            <label htmlFor="customerid">Customer ID</label>
            </div>
            
            <div ref={this.searchResults} className={this.state.searchResults}>
            <div className="searchResults">
            {this.state.query.map(
                p => (
                    <div ref={this.searchResult} className="customerSearchResult" key={p.customerid} id={p.customerid} onClick={this.enter} >{p.returnedQuery}</div>
                    ))}
                    </div>
                    </div>
                    
                    <div className="field">
                    <input type="text" ref={this.serviceDate} name="serviceDate" id="serviceDate" placeholder="01/01/2020" />
                    <label htmlFor="serviceDate">Service Date</label>
                    </div>
                    
                    <div className="field">
                    <select defaultValue="" ref={this.service} name="service" id="service" >
                    <option value="" disabled>Select...</option>
                    <option value="MT">Mow/Trim</option>
                    <option value="MTF">Mow/Trim (Front Yard)</option>
                    <option value="MTB">Mow/Trim (Back Yard)</option>
                    </select>
                    <label htmlFor="service">Service</label>
                    </div>
                    
                    <div className="field">
                    <input type="number" ref={this.cu} name="cu" id="cu" placeholder="00" />
                    <label htmlFor="cu">Clean Up</label>
                    </div>
                    
                    <div className="field">
                    <input type="number" ref={this.pw} name="pw" id="pw" placeholder="00" />
                    <label htmlFor="pw">Pull Weeds</label>
                    </div>
                    
                    <div className="field">
                    <input type="number" ref={this.r} name="r" id="r" placeholder="00" />
                    <label htmlFor="r">Rake</label>
                    </div>
                    
                    <div className="field">
                    <input type="number" ref={this.lr} name="lr" id="lr" placeholder="00" />
                    <label htmlFor="lr">Leaf Removal</label>
                    </div>
                    
                    <div className="field">
                    <input type="number" ref={this.misc} name="misc" id="misc" placeholder="00" />
                    <label htmlFor="misc">Misc. Labor</label>
                    </div>
                    
                    <div className="field">
                    <input type="text" ref={this.notes} name="notes" id="notes" placeholder="Enter a note..." />
                    <label htmlFor="notes">Notes</label>
                    </div>
                    
                    <button type="button" onClick={this.addOrder}>Save Order</button>
                    
                    </form>
                    </div>
                    );
                }
            }
            
            export default NewOrder;
            