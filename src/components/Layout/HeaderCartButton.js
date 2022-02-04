import React, {useContext, useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import classes from "./HeaderCardButton.module.css";
import CartContext from "../../store/cart-context";


const HeaderCardButton = props => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const {items} = cartCtx
  
  const numberOfCartItems = items.reduce((acc, item) => acc + item.amount, 0);
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnIsHighlighted(true)
    const timer = setTimeout(() => setBtnIsHighlighted(false), 300)

    return () => clearTimeout(timer)
  }, [items]);

  return (
    // button with badge and fontawesome icon
    <button className={btnClasses} onClick={props.onClick}>
      <FontAwesomeIcon icon={faShoppingCart} className={classes.icon}/>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCardButton;