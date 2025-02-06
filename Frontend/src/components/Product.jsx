import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }); // Empty dependency array to run only once

  return (
    <>
      <h1>Total Products: {products.length}</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2> ID: {product.id}</h2>
            <h3> Name: {product.name}</h3>
            <p> Price: {product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
