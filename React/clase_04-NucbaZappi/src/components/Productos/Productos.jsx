import React from 'react'
import {products} from '../../data/Products'
import { ButtonContainerStyled, ProductosWapper, ProductsContainer } from './ProductosStyles'
import CardProducto from './CardProducto'
import Button from '../../UI/Button/Button'

const Productos = () => {
  return (
    <ProductosWapper>
        <h2>Nuestros Productos</h2>
        <ProductsContainer>
            {
                products.map((food) => {
                    return <CardProducto key={food.id} {...food}/>
                })
            }
        </ProductsContainer>

        <ButtonContainerStyled>
            <Button><span>Ver Menos</span></Button>
            <Button disabled>Ver Más</Button>
        </ButtonContainerStyled>
    </ProductosWapper>
  )
}

export default Productos