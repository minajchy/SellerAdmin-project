import React, { useEffect, useState } from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const storedProductList = localStorage.getItem("productList");

    if (storedProductList) {
      setProductList(JSON.parse(storedProductList));
    }
  }, []);

  /*const saveProductListToLocalStorage = (productList) => {
    localStorage.setItem("productList", JSON.stringify(productList));
  };*/

  const saveProductListToLocalStorage = (productList) => {
    productList.forEach((product) => {
      localStorage.setItem(
        product.id,
        JSON.stringify({
          expenseamount: product.price,
          description: product.name,
          ordered: product.id,
        })
      );
    });
  };

  const onAddProductHandler = (pId, pPrice, pName) => {
    const prevProductList = [
      ...productList,
      { id: pId, price: pPrice, name: pName },
    ];
    setProductList(prevProductList);
    saveProductListToLocalStorage(prevProductList);
  };

  const onDeleteProductHandler = (productId) => {
    const prevProductList = productList.filter(
      (product) => product.id !== productId
    );
    setProductList(prevProductList);
    //saveProductListToLocalStorage(prevProductList);
    localStorage.removeItem(productId);
  };

  let totalValue = 0;
  for (const product of productList) {
    totalValue += Math.floor(product.price);
  }

  return (
    <React.Fragment>
      <AddProduct onAddProduct={onAddProductHandler} />
      <h2>Products</h2>
      <ProductList
        products={productList}
        onDeleteProduct={onDeleteProductHandler}
      />
      <h4>Total Value Worth of Products : Rs {totalValue}</h4>
    </React.Fragment>
  );
}

export default App;
