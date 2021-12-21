import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format"; //package to display money
import { useStateValue } from "../../StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue(); //calling context,destructuring basket from state
  return (
    <div className="subtotal">
      <CurrencyFormat
        //rendertext is what is actually shown to the screen
        renderText={(value) => (
          <>
            <p>
              {basket.length}(0 items):<strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2} //display money in two decimal places
        value={0} //this displays the actual amount
        displayType={"text"}
        thousandSeparator={true} //separates money in thousand by commas and display them
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
