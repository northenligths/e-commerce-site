//This is the component in which we have created context which is like a
//global container of data and this will send the data to all the other components
//we will wrap our app through this component
import React, { createContext, useContext, useReducer } from "react";
//create context is a react function to create context
export const StateContext = createContext(); //we have created context here

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
// {/* wrapping our app in StateProvider so that all the components can get that data whenever needed */}
//   {/* initial state is how the data looks in the starting or we can say the initialState of the  data   */}
//   {/* reducer is how we transform the data or how we manipulate the data or what we do with given data */}
