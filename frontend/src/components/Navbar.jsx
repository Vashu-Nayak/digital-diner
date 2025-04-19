import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md mb-3">
      <div className="container mx-auto flex justify-around items-center">
        <h1 className="text-xl font-bold">The Digital Diner</h1>
        <div className="space-x-4">
          <Link to="/menu" className="hover:text-gray-200">Menu</Link>
          <Link to="/cart" className="hover:text-gray-200">Cart</Link>
          <Link to="/order" className="hover:text-gray-200">Order Form</Link>
          <Link to="/orders" className="hover:text-gray-200">Orders</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
