import React from 'react';
import axios from 'axios';
import './App.css';

export default class OrdersGrid extends React.Component {
    state = {
      orders: []
    }
  
    componentDidMount() {
      axios.get(`http://localhost:8080/api/orders`)
        .then(res => {
            console.log(res);
            // const orders = res.data;
            
          this.setState({ orders: res.data });
        })
        .catch(e => {
            console.log(e);
        });
    }
  
    render() {
      return (

        <div className="ordersContainer">
        <div className="ordersGrid">
            <table className="orders">
              <tbody>
              <tr>
                <th>Order ID</th>
                <th>User ID</th>
                <th>Customer Name</th>
                <th>Service Date</th>
                <th>Mow/Trim</th>
                <th>CU</th>
                <th>PW</th>
                <th>R</th>
                <th>LR</th>
                <th>MISC</th>
                <th>Total ($)</th>
                <th>Payment Type</th>
                <th>Payment Status</th>
                </tr>
                {this.state.orders.map(order =>
                    <tr key={order.order_ID}>
                        <td>{order.order_ID}</td>
                        <td>{order.user_ID}</td>
                        <td>{order.customer_name}</td>
                        <td>{order.service_date}</td>
                        <td>{order.mow_trim}</td>
                        <td>{order.cu}</td>
                        <td>{order.pw}</td>
                        <td>{order.r}</td>
                        <td>{order.lr}</td>
                        <td>{order.misc}</td>
                        <td>{order.order_total}</td>
                        <td>{order.payment_type}</td>
                        <td>{order.payment_status}</td>
                    </tr>
                     )}
              </tbody>
            </table>
        </div>
    </div>
      )
    }
  }