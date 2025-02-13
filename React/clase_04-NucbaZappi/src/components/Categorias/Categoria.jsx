import React from 'react'
import { BorderDecoration, CardCategoria } from './CategoriasStyles'

const Categoria = ({img, tittle, category}) => {
  return (
    <CardCategoria whileTap={{scale: 0.95}}>
        <img src={img} alt={category} />
        <h2>{tittle}</h2>
        <BorderDecoration></BorderDecoration>
    </CardCategoria>
  )
}

export default Categoria