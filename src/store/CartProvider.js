import { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  let custom = false
  if (!custom && action.type === "ADD") {
    console.log(action)
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  let existingItem = false
  let updatedItems;
  switch (action.type) {
    case "ADD_ITEM":
      existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        updatedItems = state.items.map(item =>
          item.id === action.payload.id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        updatedItems = state.items.concat(action.payload);
      }
      return {
        ...state,
        items: updatedItems,
      };
    case "REMOVE_ITEM":
      updatedItems = state.items.map(item => 
        item.id === action.payload.id ? { ...item, amount: item.amount - 1 } : item
      );
      return {
        ...state,
        items: updatedItems.filter((item) => item.amount > 0),
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

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", payload: item });
    dispatchCartAction({ type: "UPDATE_TOTAL_AMOUNT", payload: cartState.totalAmount + item.price * item.amount });
  }
  const removeItemHandler = (item) => {
    dispatchCartAction({ type: "REMOVE_ITEM", payload: item });
    dispatchCartAction({ type: "UPDATE_TOTAL_AMOUNT", payload: cartState.totalAmount - item.price });
  }
  const removeAllItemsHandler = () => {
    dispatchCartAction({ type: "REMOVE_ALL_ITEMS" });
    dispatchCartAction({ type: "UPDATE_TOTAL_AMOUNT", payload: 0 });
  }
  const updateAmountHandler = () => {
    dispatchCartAction({ type: "UPDATE_AMOUNT" });
  }
  const updateTotalAmountHandler = () => {
    dispatchCartAction({ type: "UPDATE_TOTAL_AMOUNT" });
  }

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