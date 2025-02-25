import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import Counter from './components/Counter'
import { CountContextProvider } from './context/CountContext'

const App = () => {
  return (
    <>
      <CountContextProvider>
        <Counter/>
      </CountContextProvider>
      <GlobalStyles/>
    </>
  )
}

export default App