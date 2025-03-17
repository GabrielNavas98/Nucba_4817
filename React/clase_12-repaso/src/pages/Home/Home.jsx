import { useDispatch, useSelector } from "react-redux";
import { Image, ProductCard, ProductGrid } from "./HomeStyles";
import { fetchProducts } from "../../helpers/fetchProducts";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch()
  const {  data, isLoading, error } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if(isLoading) return <h2 >Cargando Datos....</h2>
  if(error) return <h2>{error}</h2>
  console.log(data)
  return (
    <ProductGrid>
      {
        data &&
          data.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <ProductCard>
                <Image src={product.image} alt={product.title}/>
                <h3 style={{color: '#333'}}>{product.title}</h3>
                <p style={{color: '#333'}}>$ {product.price }</p>
              </ProductCard>
            </Link>
          ))
      }
    </ProductGrid>
  );
};

export default Home;
