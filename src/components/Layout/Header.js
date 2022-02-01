import React, {Fragment} from 'react';
import classes from './Header.module.css';
import mealImg from '../../assets/meals.jpg';
import HeaderCardButton from './HeaderCartButton';

const Header = props => {
  return (
  <Fragment>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCardButton />
    </header>
    <div className={classes['main-image']}>
      <img src={mealImg} alt="meals" />
    </div>
  </Fragment>
  )
}

export default Header;