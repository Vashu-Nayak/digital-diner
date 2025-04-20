import React, { useState } from 'react';
import axios from 'axios';

function OrderHistory() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`https://digital-diner-backend-rnjo.onrender.com/api/orders/${phoneNumber}`);
      setOrders(response.data);
      setError('');
    } catch (err) {
      setError('No orders found for this phone number.');
    }
  };

  return (
    <div>
      <div className="flex justify-center mb-4 mt-3">
        <input
          type="text"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border border-gray-300 rounded-l-lg py-2 px-4 "
        />
        <button
          onClick={fetchOrders}
          className="bg-blue-600 text-white py-2 px-4 rounded-r-lg hover:bg-blue-700"
        >
          Fetch Orders
        </button>
      </div>
      {error && <p className="text-red-600 text-center">{error}</p>}
      {orders.length > 0 && (
        <div className="mt-4">
          {orders.map((order) => (
            <div key={order._id} className="bg-white p-4 rounded-lg shadow-md mb-4">
              <h3 className="font-bold">Order ID: {order._id}</h3>
              <p>Phone: {order.phoneNumber}</p>
              <p>Items:</p>
              <ul className="list-disc pl-5">
                {order.cart.map((item) => (
                  <li key={item._id}>{item.name} - ${item.price.toFixed(2)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderHistory;
