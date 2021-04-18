import React from "react";
import "./Product.css";
import { Button } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";

const Product = (props) => {
  const { title, price, category, image } = props.products;

  return (
    <div className="d-flex product">
      <div className="pro-img">
        <img alt="img" src={image} className="pro-img" />
      </div>
      <div className="product-details">
        <h3 className="text-primary">{title} </h3>
        <h5>Category: {category} </h5>
        <h5>Price: ${price} </h5>
        <h6 className="text-danger">Available in Stock</h6>
        <Button
          variant="warning"
          onClick = { () => props.addHandler(props.products)}
        >
          ADD TO CART <FaCartPlus style={{ fontSize: "18px" }} />
        </Button>
      </div>
    </div>
  );
};
export default Product;
