//Here we will create the initial state and reducer
export const initialState = {
  basket: [],
  user: null, //by default the user will be null
};

export const getBasketTotal = (basket) =>
  //function to get total prices of the items in the basket
  basket?.reduce((amount, item) => item.price + amount, 0);
//reduce function is used to iterate the basket array and get us total price of the items in the basket
//here 0 is the initial amount

const reducer = (state, action) => {
  //reducer will listen to the action dispatched and perform functions accordingly
  switch (action.type) {
    case "ADD_TO_BASKET": //when will click to add to basket button in the homepage it will dispatch this action and add items in the basket
      return {
        ...state, //this means return the original state
        basket: [...state.basket, action.item], //this means return the state of the basket with the item which is to be added in the basket
        //item contains id,price,image,title,rating
      };

    case "REMOVE_FROM_BASKET": //function to remove items from the basket
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      ); //this find index function finds the index of the item in which the id of the item matches with id of action dispatched and return the only the very first match found
      let newBasket = [...state.basket]; //copying the new current state of basket into a new variable
      if (index >= 0) {
        newBasket.splice(index, 1); //this splice function goes to the specific index of the item and cuts or deletes the item with that specific index and rest of the elements are as it is in the array
      } else {
        console.warn(
          `Cant remove product(id: ${action.id}) as its not in basket`
        );
      }
      return {
        ...state,
        basket: newBasket, //return state with new basket
      };

    case "SET_USER": //function to create user and set user details
      return {
        ...state, //original state
        user: action.user, //this will be the user that will be dispatched and called in app.js
      };
    default:
      return state;
  }
};

export default reducer;
