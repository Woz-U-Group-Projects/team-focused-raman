import React from "react";
import axios from "axios";
import edit from "../img/edit.png";
import editHover from "../img/editHover.png";
import deleteIcon from "../img/delete.png";
import deleteHover from "../img/deleteHover.png";

class NewOrder extends React.Component {
    
    //  handleOnChange(value) {
    //    this.setState({ phone: value })
    //  }
    
    constructor(props) {
        super(props);
        this.state = { orders: []
        };
        this.orderid = React.createRef();
        this.customerid = React.createRef();
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.serviceDate = React.createRef();
        this.service = React.createRef();
        this.cu = React.createRef();
        this.pw = React.createRef();
        this.r = React.createRef();
        this.lr = React.createRef();
        this.misc = React.createRef();
        this.day = React.createRef();
        this.mowTotal = React.createRef();
        this.extrasTotal = React.createRef();
        this.paymentType = React.createRef();
        this.total = React.createRef();
        this.notes = React.createRef();
        
        //    this.handleOnChange = this.handleOnChange.bind(this);
    }
    
    componentDidMount() {
        this.getData();
    }
    
    getData = () => {
        // Java Spring Boot uses port 8080
        let url = "http://localhost:8080/orderdetail";
        
        // C# dotnetcore uses port 5000
        //let url = "http://localhost:5000/projects";
        
        // Express uses port 3001 (react uses 3000)
        //let url = "http://localhost:3001/tasks";
        axios.get(url).then(response => this.setState({ orders: response.data }));
    };
    
    addOrder = () => {
        
        let url = "http://localhost:8080/order";
        axios.post(url, { 
            
//            customerid: this.customerid.current.value,
//            firstName: this.firstName.current.value,
//            lastName: this.lastName.current.value,
            customerid: this.customerid.current.value,
            serviceDate: this.serviceDate.current.value,
            service: this.service.current.value,
            cu: this.cu.current.value,
            pw: this.pw.current.value,
            r: this.r.current.value,
            lr: this.lr.current.value,
            misc: this.misc.current.value,
//            day: this.day.current.value,
//            mowTotal: this.mowTotal.current.value,
//            extrasTotal: this.extrasTotal.current.value,
//            paymentType: this.paymentType.current.value,
//            total: this.total.current.value,
//            notes: this.notes.current.value,
            
            
        }).then(response => {
            // refresh the data
            this.getData();
            // empty the input
            
//            this.customerid.current.value = "";
//            this.firstName.current.value = "";
//            this.lastName.current.value = "";
            this.customerid.current.value = "";
            this.serviceDate.current.value = "";
            this.service.current.value = "";
            this.cu.current.value = "";
            this.pw.current.value = "";
            this.r.current.value = "";
            this.lr.current.value = "";
            this.misc.current.value = "";
//            this.day.current.value = "";
//            this.mowTotal.current.value = "";
//            this.extrasTotal.current.value = "";
//            this.paymentType.current.value = "";
//            this.total.current.value = "";
//            this.notes.current.value = "";
            
        });
    };
    
    render() {
        
        return (
            <div className="customer">
            <h3>New Order</h3>
            
            <form action="">
                        
            <div className="field">
            <input type="text" ref={this.customerid} name="customerid" id="customerid" placeholder="Jane Appleseed" />
            <label htmlFor="customerid">Customer ID</label>
            </div>
            
            <div className="field">
            <input type="date" ref={this.serviceDate} name="serviceDate" id="serviceDate" placeholder="01-01-2020" />
            <label htmlFor="serviceDate">Service Date</label>
            </div>
            
            <div className="field">
            <input type="text" ref={this.service} name="service" id="service" placeholder="MT" />
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
            
            <button type="button" onClick={this.addOrder}>Save Order</button>
            
            </form>
            
            
            <h3>Orders</h3>
            
            <div className="grid">
            <table>
            <tbody>
            
            <tr>
            <th>Order ID</th>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Service Date</th>
            <th>Service Rendered</th>
            <th>Clean Up</th>
            <th>Pull Weeds</th>
            <th>Rake</th>
            <th>Leaf Removal</th>
            <th>Misc. Labor</th>
            <th>Mow Total ($)</th>
            <th>Extras Total ($)</th>
            <th>Order Total ($)</th>
            <th>Notes</th>
            <th>Action</th>
            </tr>
            
            {this.state.orders.map(p => (
                
                <tr key={p.orderid}>
                <td>{p.orderid}</td>
                <td>{p.customerid}</td>
                <td>{p.customerName}</td>
                <td>{p.service_date}</td>
                <td>{p.service}</td>
                <td>{p.cu}</td>
                <td>{p.pw}</td>
                <td>{p.r}</td>
                <td>{p.lr}</td>
                <td>{p.misc}</td>
                <td>{p.mow_total}</td>
                <td>{p.extras_total}</td>
                <td>{p.total}</td>
                <td>{p.notes}</td>
                <td>
                <div className="gridAction">
                <span title="Edit Customer"><img className="visible actionEdit" src={edit} /></span>
                <span title="Edit Customer"><img className="hidden actionEdit" src={editHover} /></span>
                <span title="Delete Customer"><img className="visible actionDelete" src={deleteIcon} /></span>
                <span title="Delete Customer"><img className="hidden actionDelete" src={deleteHover} /></span>
                
                </div>
                </td>
                </tr>
                ))}
                
                </tbody>
                </table>
                </div>
                </div>
                );
            }
        }
        
        export default NewOrder;
        