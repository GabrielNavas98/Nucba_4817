import { useDispatch } from "react-redux";
import { formatPrice } from "../../utils/index";

import Button from "../UI/Button/Button";

import {
  CardPrice,
  ContainerPrice,
  ProductosCard,
} from "./CardsProductosStyles";
import { addToCart } from "../../redux/cart/cartSlice";

const CardProducto = ({title, img, price, desc, id}) => {

  const dispatch = useDispatch()
  return (
    <ProductosCard>
      <img
        src={img}
        alt={title}
      />
      <h2>{title}</h2>
      <p>{desc}</p>
      <ContainerPrice>
        <CardPrice>{formatPrice(price)}</CardPrice>
        <Button onClick={() => dispatch(addToCart({title, img, price, desc, id}))}>Agregar</Button>
      </ContainerPrice>
    </ProductosCard>
  );
};

export default CardProducto;
