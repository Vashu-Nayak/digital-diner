import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md ">
      <div className="container mx-auto flex justify-around items-center">
        <h1 className="text-xl font-bold">The Digital Diner</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-200">Menu</Link>
          <Link to="/cart" className="hover:text-gray-200">Cart</Link>
          {/* <Link to="/order" className="hover:text-gray-200">Order</Link> */}
          <Link to="/history" className="hover:text-gray-200">History</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
