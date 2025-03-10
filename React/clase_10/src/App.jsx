import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import Counter from './components/Counter/Counter'
import Logo from './components/logo/Logo'
import { Provider } from 'react-redux'
import store from './redux'

const App = () => {
  return (
    <>
      <Provider store={ store }>
        <Counter />
      </Provider>
      <Logo />
      <GlobalStyles />
    </>
  )
}

export default App