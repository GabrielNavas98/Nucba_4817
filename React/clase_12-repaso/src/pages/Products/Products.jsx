import React from "react";
import { BackButton, Image, ProductDetailContainer } from "./ProductsStyles";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () => {

  const { productID } = useParams()
  const {image, title, price, description, category, rating} = useSelector((state) => 
    state.products.data.find((product) => product.id === +productID ))

  return (
    <ProductDetailContainer>
      <Image src={image}/>
      <h2>{title}</h2>
      <p>Categoria: {category}</p>
      <p>Descripcion: {description}</p>
      <p>Price: ${price}</p>
      <p><strong>Rating:</strong>⭐ {rating.rate} /5</p>
      <p><strong>Reviews:</strong>{rating.count}</p>
      <BackButton to="/">Volver a la tienda</BackButton>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
