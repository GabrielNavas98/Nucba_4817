import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { IoMdTrash } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { formatPrice } from "../../../utils";

import Increase from "../../UI/Increase/Increase";
import Submit from "../../UI/Submit/Submit";
import ModalCartCard from "./ModalCartCard";

import { ModalOverlayStyled } from "../NavbarStyles";
import {
  ButtonContainerStyled,
  CloseButtonContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  EnvioStyled,
  MainContainerStyled,
  PriceContainerStyled,
  PriceStyled,
  ProductsWrapperStyled,
  SubtotalStyled,
  TitleStyled,
  TotalStyled,
} from "./ModalCartStyles";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, toggleHiddenCart } from "../../../redux/cart/cartSlice";
import { useEffect } from "react";

const ModalCart = () => {
  const {hidden, shippingCost, cartItems} = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  

  const totalCartPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity)
  }, 0)

  // useEffect(() => {
  //   if(!hidden){
  //     dispatch(toggleHiddenCart())
  //   }
  // },[dispatch, hidden])

  return (
    <>
      {!hidden && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenCart())}
          isHidden={hidden}
        />
      )}
      <AnimatePresence>
        {!hidden && (
          <ContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: "spring", damping: 27 }}
            key="cart-modal"
          >
            <CloseButtonContainerStyled>
              <CloseButtonStyled
                className="close__modal "
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(toggleHiddenCart())}
              >
                <MdOutlineClose size="24px" />
              </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>
              <TitleStyled>
                <h1>Tus Productos</h1>
                <Increase
                  onClick={() => dispatch(clearCart())}
                  bgColor="var(--magenta)"
                  disabled={!cartItems.length}
                >
                  <IoMdTrash />
                </Increase>
              </TitleStyled>

              <ProductsWrapperStyled>
                {
                  cartItems.length ? (
                    cartItems.map((item) => (
                      <ModalCartCard key={item.id} {...item}/>
                    ))
                  ): (
                    <p>No seas malo, compranos algo</p>
                  )
                }
              </ProductsWrapperStyled>
            </MainContainerStyled>

            <PriceContainerStyled>
              <SubtotalStyled>
                <p>Subtotal:</p>
                <span>{formatPrice(totalCartPrice)}</span>
              </SubtotalStyled>
              <EnvioStyled>
                <p>Envio</p>
                <span>{formatPrice(shippingCost)}</span>
              </EnvioStyled>
              <hr />
              <TotalStyled>
                <p>Total:</p>
                <PriceStyled>{formatPrice(totalCartPrice + shippingCost)}</PriceStyled>
              </TotalStyled>
              <ButtonContainerStyled>
                <Submit onClick={() => navigate("/checkout")}>
                  Iniciar pedido
                </Submit>
              </ButtonContainerStyled>
            </PriceContainerStyled>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;
