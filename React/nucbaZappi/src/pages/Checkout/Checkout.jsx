import CheckoutForm from "../../components/Checkout/Form/CheckoutForm";
import ProductsCheckout from "../../components/Checkout/Products/ProductsCheckout";
import { ContainerCheckoutStyled } from "../Checkout/CheckoutStyles";
import {useSelector} from 'react-redux'

const Checkout = () => {
  const {cartItems, shippingCost} = useSelector(state => state.cart)

  const totalCartPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity)
  }, 0)

  return (
    <div>
      <ContainerCheckoutStyled>
        <CheckoutForm 
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={totalCartPrice}
        />
        <ProductsCheckout 
           cartItems={cartItems}
           shippingCost={shippingCost}
           price={totalCartPrice}
        />
      </ContainerCheckoutStyled>
    </div>
  );
};

export default Checkout;
