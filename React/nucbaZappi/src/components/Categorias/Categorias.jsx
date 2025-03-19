import { Categories } from "../../data/Categories";
import Categoria from "./Categoria";
import { CategoriasContainer } from "./CategoriasStyles";

const Categorias = () => {
  return (
    <CategoriasContainer>
      {
        Categories.map((categoria) => <Categoria {...categoria} key={categoria.id}/>)
      }
    </CategoriasContainer>
  );
};

export default Categorias;
