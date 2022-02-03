import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems = <ul className={classes['cart-items']}>{
    [{name: 'sushi', id: 'c1', amount: 2, price: 12.90}].map(item => {
      return (
        <li key={item.id}>
          <div className="meal">
            <h3>{item.name}</h3>
            <div className="description">{item.description}</div>
            <div className="price">{item.price}</div>
          </div>
          <div>
            <button onClick={() => props.removeFromCart(item)}>Remove</button>
          </div>
        </li>
      );
    })}
  </ul>


  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.26</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;