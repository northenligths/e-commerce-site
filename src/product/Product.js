import React from "react";
import { useStateValue } from "../StateProvider";
import "./product.css";
function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue(); //calling the context created
  const addToBasket = () => {
    //dispatch action of adding item in the basket
    dispatch({
      //dispatch helps to perform an action that is shooting the items in the data layer
      type: "ADD_TO_BASKET",
      item: {
        //item is the actual item that needs to be added in the basket
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    //using the props to display data in homepage 'product' component
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
