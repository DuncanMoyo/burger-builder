import React from 'react';
import classes from './Burger.module.css';
import BurgerInredient from './BurgerIngredient/BurgerIngredient'
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';

const Burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerInredient type="bread-top"/>
      <BurgerInredient type="cheese"/>
      <BurgerInredient type="meat"/>
      <BurgerInredient type="bread-bottom"/>
    </div>
  )
}

export default Burger;
