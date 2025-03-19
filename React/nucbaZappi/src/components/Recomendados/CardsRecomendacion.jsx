import { recommended } from "../../data/Recommended";
import CardRecomendacion from "./CardRecomendacion";

import { CardsContainer } from "./CardsRecomendacionStyled";

const CardsRecomendacion = () => {
  return (
    <CardsContainer gridLength={4}>
      {
        recommended.map((recomendado) =>
          <CardRecomendacion {...recomendado} key={recomendado.id} />
        )
      }
    </CardsContainer>
  );
};

export default CardsRecomendacion;
