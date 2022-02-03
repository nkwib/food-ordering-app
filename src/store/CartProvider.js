import { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "REMOVE_ALL_ITEMS":
      return {
        ...state,
        items: [],
      };
    case "UPDATE_AMOUNT":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              amount: action.payload.amount,
            };
          }
          return item;
        }),
      };
    case "UPDATE_TOTAL_AMOUNT":
      return {
        ...state,
        totalAmount: action.payload,
      };
    default:
      return state;
  }
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => dispatchCartAction({ type: "ADD_ITEM", payload: item });
  const removeItemHandler = (item) => dispatchCartAction({ type: "REMOVE_ITEM", payload: item });
  const removeAllItemsHandler = () => dispatchCartAction({ type: "REMOVE_ALL_ITEMS" });
  const updateAmountHandler = () => dispatchCartAction({ type: "UPDATE_AMOUNT" });
  const updateTotalAmountHandler = () => dispatchCartAction({ type: "UPDATE_TOTAL_AMOUNT" });

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    removeAllItems: removeAllItemsHandler,
    updateAmount: updateAmountHandler,
    updateTotalAmount: updateTotalAmountHandler,
  };
  return <CartContext.Provider value={cartContext} >{props.children}</CartContext.Provider>;
};

export default CartProvider;