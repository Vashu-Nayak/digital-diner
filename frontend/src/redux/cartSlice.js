import { createSlice } from '@reduxjs/toolkit';

const saveToLocalStorage = (state) => {
  localStorage.setItem('cart', JSON.stringify(state));
};

const loadFromLocalStorage = () => {
  const data = localStorage.getItem('cart');
  return data ? JSON.parse(data) : { items: [], totalPrice: 0 };
};

const initialState = loadFromLocalStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          JSON.stringify(item) === JSON.stringify(action.payload)
      );
    
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price });
      }
    
      state.totalPrice = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
      saveToLocalStorage(state);
    },

    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
      saveToLocalStorage(state);
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
        item.totalPrice = item.quantity * item.price;
      }
      state.totalPrice = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
      saveToLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
