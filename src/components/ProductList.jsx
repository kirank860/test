// ProductList.js
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }} className="cards">
            <h1>{product.category}</h1>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img style={{ width: "200px", height: "200px" }} src={product.image} alt="" />
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
