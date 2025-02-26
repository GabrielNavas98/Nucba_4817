import React from 'react';

import { Card, LinkItem, ProductContainer, Title } from './ProductsStyles';
import { productList } from '../../data/productsData';

const Products = () => {
  return (
    <>
      <Title>Puede ser pa?</Title>
      <ProductContainer>
        {
          productList.map((product) => {
            const {id, year, name, src} = product
            return(
              <Card key={id}>
                <img src={src} alt={name} />
                <h2>{name}</h2>
                <span>{year}</span>
                <LinkItem to={name}>Ver más</LinkItem>
              </Card>
            )
          })
        }
      </ProductContainer>
    </>
  );
};

export default Products;
