import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/payment/Payment";

function App() {
  const [state, dispatch] = useStateValue(); //calling the context
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //this is firebase listener checks if the user is logged in or not
      if (authUser) {
        //if the user is logged in
        dispatch({
          type: "SET_USER", //reducer function to shoot the user details into the data layer
          user: authUser,
        });
      } else {
        //when the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
