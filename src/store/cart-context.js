import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
  removeAllItems: () => {},
  updateAmount: (item, amount) => {},
  updateTotalAmount: (amount) => {},
});

export default CartContext;