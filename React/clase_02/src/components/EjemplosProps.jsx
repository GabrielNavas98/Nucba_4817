/* eslint-disable react/prop-types */


const SaludoPorProps = ({nombre, apellido, edad, pais}) => {
  return (
    <h1>Hola mi nombre es {nombre} {apellido}, tengo {edad} y vivo en {pais}</h1>
  )
}

SaludoPorProps.defaultProps = {
    apellido: 'Valle',
    edad: 30,
    pais: 'Argentina'
}

export default SaludoPorProps