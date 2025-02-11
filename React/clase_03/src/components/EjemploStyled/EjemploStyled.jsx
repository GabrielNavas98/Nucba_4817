import { PHeredado, StyledButton, StyledH4, StyledP, StylesContainer } from './EjemploStyledStyles'

const EjemploStyled = () => {
  return (
    <StylesContainer>
        <StyledH4>Hola soy un h4 estilado</StyledH4>
        <StyledP>Hola soy un p estilado</StyledP>
        <h3>Hola soy un h3 comun</h3>
        <PHeredado>soy un p con estilos heredados</PHeredado>
        <StyledButton color>Hola soy un button</StyledButton>
        <StyledButton width='250px'>Hola soy un button</StyledButton>
    </StylesContainer>
  )
}

export default EjemploStyled