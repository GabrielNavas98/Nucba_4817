import GlobalStyles from "./Styles/GlobalStyles";
import { MyAppStyled } from "./AppStyles";

import Search from "./components/search/Search";
import Pokemon from "./components/PokemonCard/card/Card";
import Loader from './components/loader/Loader'

// import { useAxios } from "./hooks/useAxios";
import { useSelector } from 'react-redux'

function App() {

  // const { data, isLoading, error, handleSubmit } = useAxios()

  const state = useSelector((state) => state.pokemon)

  return (
    <>
      <MyAppStyled>
        <Search />
        {state.isLoading && <Loader />}
        {state.error && <h2 style={{ color: 'crimson' }}>{state.error}</h2>}
        {state.data && <Pokemon {...state.data} />}
      </MyAppStyled>
      <GlobalStyles />
    </>
  );
}

export default App;
