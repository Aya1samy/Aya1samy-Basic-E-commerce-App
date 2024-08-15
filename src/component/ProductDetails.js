import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
  const params = useParams();
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);
  console.log(params);
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <>
      {/* <h1>Product details {params.productId}</h1> */}
      <Product product={product} showButton={false} />
    </>
  );
}
export default ProductDetails;
