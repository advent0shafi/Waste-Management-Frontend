import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/orders/')
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the orders!', error);
            });
    }, []);

    return (
        <div>
            <h2>Order List</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        Order ID: {order.id} - Total Price: {order.total_price} - Status: {order.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;
