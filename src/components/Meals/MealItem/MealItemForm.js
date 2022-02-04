import React, {useRef, useState} from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)

  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value.trim();
    console.log(enteredAmount);
    if (enteredAmount.length > 0 && enteredAmount > 0 && enteredAmount <= 5) {
      props.onAddToCart(+enteredAmount);
    } else {
      setAmountIsValid(false);
      return;
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '10',
          step: '1',
          defaultValue: '1',
        }} />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter a valid Amount</p>}
    </form>
  );
}

export default MealItemForm;