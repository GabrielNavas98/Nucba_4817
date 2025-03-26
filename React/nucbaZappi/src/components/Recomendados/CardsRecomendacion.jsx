import CardRecomendacion from "./CardRecomendacion";
import {useSelector} from 'react-redux'

import { CardsContainer } from "./CardsRecomendacionStyled";

const CardsRecomendacion = () => {

  const {recommended}= useSelector(state => state.recommended)
  
  return (
    <CardsContainer gridLength={recommended.length}>
      {
        recommended.map((recomendado) =>
          <CardRecomendacion {...recomendado} key={recomendado.id} />
        )
      }
    </CardsContainer>
  );
};

export default CardsRecomendacion;
