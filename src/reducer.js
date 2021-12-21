//Here we will create the initial state and reducer
export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  //reducer will listen to the action dispatched and perform functions accordingly
  switch (action.type) {
    case "ADD_TO_BASKET": //when will click to add to basket button in the homepage it will dispatch this action and add items in the basket
      return {
        ...state, //this means return the original state
        basket: [...state.basket, action.item], //this means return the state of the basket with the item which is to be added in the basket
        //item contains id,price,image,title,rating
      };
    default:
      return state;
  }
};

export default reducer;
