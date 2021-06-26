import React from "react";
import Product from "./../components/Product";
import "./home.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProducts as listProducts } from "./../redux/actions/ProductAction";

function Home() {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Lattest Product</h2>

      <div className="homescreen__products">
        {loading ? (
          <h2>please wait...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) =>
          
          <Product name={product.name} imageUrl={product.imageUrl} description={product.description} price={product.price} _id={product._id}/>
          
        ))}
      </div>
    </div>
  );
}

export default Home;
