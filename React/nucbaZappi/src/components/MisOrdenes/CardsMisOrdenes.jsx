import { useSelector } from 'react-redux';
import CardMisOrdenes from './CardMisOrdenes';
import { MisOrdenesContainerStyled } from './CardMisOrdenesStyles';
import Loader from '../UI/Loader/Loader'


const CardsMisOrdenes = () => {

  const { orders, error, loading } = useSelector(state => state.orders)

  if (loading && !error) {
    return <Loader styles={{ height: "50px", width: "50px" }} />
  }

  if (error) {
    return <h2>{error}</h2>
  }
  return (
    <MisOrdenesContainerStyled>
      {
        orders?.length ? (
            orders.map((order) => <CardMisOrdenes key={order._id} {...order}/>)
          )
          : (
            <h2>Porfa compranos algo</h2>
          )
      }
    </MisOrdenesContainerStyled>
  );
};

export default CardsMisOrdenes;
