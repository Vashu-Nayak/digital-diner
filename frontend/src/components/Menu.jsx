import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function Menu() {
  const [menuItems, setMenuItems] = useState({});
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/menu');
        const items = response.data;


        const categorizedItems = items.reduce((acc, item) => {
          acc[item.category] = acc[item.category] || [];
          acc[item.category].push(item);
          return acc;
        }, {});

        setMenuItems(categorizedItems);
        setCategories(['All', ...Object.keys(categorizedItems)]);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, []);

  const displayedItems =
    selectedCategory === 'All'
      ? Object.values(menuItems).flat()
      : menuItems[selectedCategory] || [];

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="container mx-auto py-8">

      <div className="flex justify-center mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 mx-2 rounded-full font-semibold ${selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {displayedItems.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedItems.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-blue-600 font-semibold">${item.price.toFixed(2)}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No items found for this category.</p>
      )}
    </div>
  );
}

export default Menu;

