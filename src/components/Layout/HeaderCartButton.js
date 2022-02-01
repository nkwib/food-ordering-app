import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import classes from "./HeaderCardButton.module.css";

const HeaderCardButton = props => {
  return (
    // button with badge and fontawesome icon
    <button className={classes.button}>
      <FontAwesomeIcon icon={faShoppingCart} className={classes.icon}/>
      <span>Your Cart</span>
      <span className={classes.badge}>2</span>
    </button>
  );
}

export default HeaderCardButton;