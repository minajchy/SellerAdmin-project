import React, { useState } from "react";

const AddProduct = (props) => {
  const [enteredProductId, setEnteredProductId] = useState("");
  const [enteredSellingPrice, setEnteredSellingPrice] = useState("");
  const [enteredProductName, setEnteredProductName] = useState("");

  const submitProductHandler = (event) => {
    event.preventDefault();
    if (
      enteredProductId.trim().length === 0 ||
      enteredSellingPrice.trim().length === 0 ||
      enteredProductName.trim().length === 0
    ) {
      return;
    }
    props.onAddProduct(
      enteredProductId,
      enteredSellingPrice,
      enteredProductName
    );
    setEnteredProductId("");
    setEnteredSellingPrice("");
    setEnteredProductName("");
  };

  const productIdChangeHandler = (event) => {
    setEnteredProductId(event.target.value);
  };

  const sellingPriceChangeHandler = (event) => {
    setEnteredSellingPrice(event.target.value);
  };

  const productNameChangeHandler = (event) => {
    setEnteredProductName(event.target.value);
  };

  return (
    <form onSubmit={submitProductHandler}>
      <label htmlFor="productid">Product ID</label>
      <input
        id="productid"
        type="number"
        value={enteredProductId}
        onChange={productIdChangeHandler}
      />
      <label htmlFor="sellingprice">Selling Price</label>
      <input
        id="sellingprice"
        type="number"
        value={enteredSellingPrice}
        onChange={sellingPriceChangeHandler}
      />
      <label htmlFor="productname">Product Name </label>
      <input
        id="productname"
        type="text"
        value={enteredProductName}
        onChange={productNameChangeHandler}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
