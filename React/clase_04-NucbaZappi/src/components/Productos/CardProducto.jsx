import React from 'react'
import { CardPrice, ContainerPrice, ProductosCard } from './ProductosStyles'
import Button from '../../UI/Button/Button'

const CardProducto = ({img, title, desc, price}) => {
  return (
    <ProductosCard>
        <img src={img} alt={desc} />
        <h2>{title}</h2>
        <p>{desc}</p>
        <ContainerPrice>
            <CardPrice>${price}</CardPrice>
            <Button>Agregar</Button>
        </ContainerPrice>
    </ProductosCard >
  )
}

export default CardProducto