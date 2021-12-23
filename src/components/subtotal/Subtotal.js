import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format"; //package to display money
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue(); //calling context,destructuring basket from state
  return (
    <div className="subtotal">
      <CurrencyFormat
        //rendertext is what is actually shown to the screen
        renderText={(value) => (
          <>
            <p>
              {/* this displays the total items in the basket in subtotal component */}
              Subtotal ({basket?.length} items):
              <strong>
                {/* Value takes the getBasketTotal function and display total prices of items in the basket */}
                {value}
              </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2} //display money in two decimal places
        value={getBasketTotal(basket)} //this displays the actual amount
        displayType={"text"}
        thousandSeparator={true} //separates money in thousand by commas and display them
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
