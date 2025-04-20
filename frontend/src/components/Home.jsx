import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
        Welcome to The Digital Diner
      </h1>
      <p className="text-lg sm:text-xl text-white mb-8 max-w-xl">
        Discover delicious meals and snacks crafted just for you. Browse our menu and place
        your order for pickup today!
      </p>
      <div className="flex gap-4">
        <Link
          to="/menu"
          className="bg-white text-green-500 hover:bg-green-100 font-semibold px-6 py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
        >
          View Menu
        </Link>
        <Link
          to="/cart"
          className="bg-green-600 text-white hover:bg-green-700 font-semibold px-6 py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
        >
          Go to Cart
        </Link>
      </div>
    </div>
  );
};

export default Home;
