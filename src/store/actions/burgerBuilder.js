import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  }
}

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  }
}

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
    // to chnge order of ingredients
    // ingredients: {
    //   salad : actionTypes.ingredients.salad,
    //   macon : actionTypes.ingredients.macon,
    //   cheese : actionTypes.ingredients.cheese,
    //   meat : actionTypes.ingredients.meat
    // }
  }
}

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  }
}

export const initIngredients = () => {
  return dispatch => {
    axios
      .get("https://react-my-burger-7c200.firebaseio.com/ingredients.json")
      .then((response) => {
        dispatch(setIngredients(response.data))
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed())
      });
  }
}