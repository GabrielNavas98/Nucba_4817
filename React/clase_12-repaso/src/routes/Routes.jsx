import React from 'react'
import {
    BrowserRouter,
    Routes as ReactDomRouter,
    Route
} from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import ProductDetail from '../pages/Products/Products'

const Routes = () => {
  return (
    <BrowserRouter>
        <Layout>
            <ReactDomRouter>
                <Route path='/' element={<Home/>}/>
                <Route path='/products/:productID' element={<ProductDetail/>}/>
                <Route path='*' element={<h2>Aca no hay nada 404</h2>}/>
            </ReactDomRouter>
        </Layout>
    </BrowserRouter>
  )
}

export default Routes