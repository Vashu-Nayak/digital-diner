import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function OrderConfirmation() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const cart = useSelector((state) => state.cart.items);
  const [confirmation, setConfirmation] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://digital-diner-backend-rnjo.onrender.com/api/orders', {
        name,
        phoneNumber,
        cart,
        totalPrice:cart.reduce((total, item) => total + item.price * item.quantity, 0)
      });
      setConfirmation(response.data.message);
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border-black-300 rounded-lg p-2 bg-gray-600 text-white"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full border-black-300 rounded-lg p-2 bg-gray-600 text-white"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
      >
        Place Order
      </button>
      {confirmation && (
        <p className="text-center text-green-600 mt-4">{confirmation}</p>
      )}
    </form>
  );
}

export default OrderConfirmation;
