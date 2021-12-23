import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import Subtotal from "../subtotal/Subtotal";
import "./checkout.css";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue(); //calling the context
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_jpg"
          alt=""
        />
        <div className="">
          <h3>Hello,{user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* //here we are mapping through the basket array and displaying checkoutProduct component(with props) for every item added in the list */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
