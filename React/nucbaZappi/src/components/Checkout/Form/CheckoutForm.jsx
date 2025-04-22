import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../axios/axios-orders";
import { checkoutInitialValues, checkoutValidationSchema } from "../../../formik";
import Input from "../../UI/Input/Input";
import Submit from "../../UI/Submit/Submit";

import { CheckoutDatosStyled, Form, Formik } from "./CheckoutFormStyles";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../redux/cart/cartSlice";
import Loader from "../../UI/Loader/Loader";

const CheckoutForm = ({ cartItems, price, shippingCost }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentUser } = useSelector(state => state.user)

  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={async (values) => {
          const orderData = {
            items: cartItems,
            price,
            shippingCost,
            total: price + shippingCost,
            shippingDetails: { ...values }
          }
          try {
            await createOrder(dispatch, orderData, currentUser)
            navigate('/felicitaciones')
            dispatch(clearCart())
          } catch (error) {
            alert('Error al crear la orden')
          }
        }}
      >
        {
          ({ isSubmitting }) => (
            <Form>
              <Input
                name='name'
                htmlFor="nombre"
                type="text"
                id="nombre"
                placeholder="Tu nombre"
              >
                Nombre
              </Input>
              <Input
                name='cellphone'
                htmlFor="celular"
                type="text"
                id="celular"
                placeholder="Tu celular"
              >
                Celular
              </Input>
              <Input
                name='location'
                htmlFor="localidad"
                type="text"
                id="localidad"
                placeholder="Tu localidad"
              >
                Localidad
              </Input>
              <Input
                name='address'
                htmlFor="direccion"
                type="text"
                id="dirección"
                placeholder="Tu dirección"
              >
                Dirección
              </Input>
              <div>
                <Submit disabled={!cartItems.length}>
                  {isSubmitting ? <Loader/> : 'Iniciar Pedido'}
                </Submit>
              </div>
            </Form>
          )
        }
      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;
