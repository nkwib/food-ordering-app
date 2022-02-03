import React, {useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import classes from "./HeaderCardButton.module.css";
import CartContext from "../../store/cart-context";


const HeaderCardButton = props => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((acc, item) => acc + item.amount, 0);
  return (
    // button with badge and fontawesome icon
    <button className={classes.button} onClick={props.onClick}>
      <FontAwesomeIcon icon={faShoppingCart} className={classes.icon}/>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCardButton;