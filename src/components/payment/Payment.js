import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import "./payment.css";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue(); //calling the context
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          {/* This is for showing items added to the basket at the time of checkout and also a link for checkout page */}
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* Payment Section - Delivery Address */}

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 Amazon Street</p>
            <p>XYZ, India</p>
          </div>
        </div>

        {/* Payment Section - Review Items */}

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items And Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>

        {/* Payment Section - Payment method */}

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form>{/* <CardElement /> */}</form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
