import { AiOutlineSearch } from "react-icons/ai";

import Button from "../UI/Button/Button";

import {
  HeroContainerStyled,
  HeroFormStyled,
  HeroSearchBarStyled,
  IconWrapperStyled,
} from "./HeroStyles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/categories/categoriesSlice";

const Hero = ({ doScroll }) => {
  const [value, setValue ] = useState('')

  const dispatch = useDispatch()

  const listOfCategories = useSelector(
      state => state.categories.categories
    ).map((category) => category.category )


  const handlerSubimit = (e) => {
    e.preventDefault()
    const inputCategory = value.trim().toLowerCase().split(' ').join('')
    
    const selectedCategory = listOfCategories.find(
      (category) => category.toLowerCase() === inputCategory
    )
    
    if(selectedCategory){
      dispatch(selectCategory(selectedCategory))
      //ejecutar funcion para hacer scroll a cierto lugar
      doScroll()
    }else {
      return alert('Categoría no encontrada')
    }

    setValue('')

  }
  return (
    <HeroContainerStyled>
      <div>
        <h1 className="title">¿Qué categoría estás buscando?</h1>
        <HeroFormStyled>
          <HeroSearchBarStyled
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            placeholder="Ej. Pizzas a la piedra"
          />
          <IconWrapperStyled>
            <AiOutlineSearch />
          </IconWrapperStyled>
          <Button
            onClick={(e) => handlerSubimit(e)}
            radius="10"
            disabled={!value}
          >
            Buscar
          </Button>
        </HeroFormStyled>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797662/coding/NucbaZappi/Assets/pizza-hero_enjaeg_oprhww.png"
          alt=""
        />
      </div>
    </HeroContainerStyled>
  );
};

export default Hero;
