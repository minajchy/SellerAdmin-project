import React from "react";

const ProductList = (props) => {
  const deleteProductHandler = (productId) => {
    props.onDeleteProduct(productId);
  };

  return (
    <div>
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>
            {product.id} - {product.price} - {product.name}
            <button onClick={() => deleteProductHandler(product.id)}>
              Delete Product
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
