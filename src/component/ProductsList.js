import React, { useEffect, useState } from "react";
import Product from "./Product";
function ProductLists() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  const getProductInCategory = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our products</h2>
      <div className="container">
        {categories.map((cat) => {
          return (
            <button
              key={cat}
              className="btnbtn-info"
              onClick={() => {
                getProductInCategory(cat);
              }}
            >
              {cat}
            </button>
          );
        })}
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ProductLists;
