import React from 'react';
import RowOne from "./row-one/row-one";
import RowTwo from "./row-two/row-two";
import RowThree from "./row-three/row-three";
import ProductList from "./product-list/product-list";

const Main = () => {
  return (
    <div>
      <RowOne/>
      <RowTwo/>
      <RowThree/>
      <ProductList/>
    </div>
  );
};

export default Main;
