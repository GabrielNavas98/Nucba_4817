import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {

  // console.log(useParams());

  const { productID } = useParams()
  
  return (
    <div>
      <h2>Sección de {productID}</h2>
    </div>
  );
};

export default Product;
