import Categoria from "./Categoria";
import { CategoriasContainer } from "./CategoriasStyles";

import { useSelector } from "react-redux";

const Categorias = () => {

  const { categories } = useSelector((state) => state.categories )
  
  return (
    <CategoriasContainer>
      {
        categories.map((categoria) => <Categoria {...categoria} key={categoria.id}/>)
      }
    </CategoriasContainer>
  );
};

export default Categorias;
