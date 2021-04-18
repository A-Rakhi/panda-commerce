import {React, useState, useEffect} from "react"
import Caart from "../Caart/Caart"
import '../Shop/Shop.css'
import Product from "../Products/Product"

function Shop() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const addHandler =(prices) =>{
      const newCart =[...cart, prices]
      setCart(newCart)
  }

    return(
        <div className="d-flex mt-4">
        <div className="pro-area">
        {products.map((item) => (
            <Product
              key={item.id}
              products={item}
              addHandler={addHandler}
            />
          ))}
        </div>
            <div className="cart-area mr-auto">
            <Caart cart={cart}/>

            </div>

        </div>
    )
}
export default Shop ;