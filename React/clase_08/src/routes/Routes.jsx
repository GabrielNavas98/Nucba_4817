import React from 'react'
import { 
    BrowserRouter,
    Routes as ReactDomRouter,
    Route,
} from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Products from '../pages/Products/Products'
import Product from '../pages/Product/Product'
import User from '../pages/User/User'
import AuthProvider from '../context/AuthContext'
import ProtectedRoute from '../components/ProtetectedRoutes/ProtectedRoute'

const Routes = () => {
  return (
    <BrowserRouter>
        <AuthProvider>
            <Layout>
                <ReactDomRouter>
                    <Route path='/' element={<Home/>}/>
                    <Route path='login' element={<Login/>}/>
                    {/* <Route path='products' element={<Products/>}/> */} {/* sin rutas anidadas */}
                    {/*Anidamos rutas */}
                    <Route path='products'>
                        <Route index element={<Products/>}/>
                        <Route path=':productID' element={<Product/>}/>
                    </Route>
                    
                    <Route 
                        path='user/:username' 
                        element={
                            <ProtectedRoute redirecTo={'/login'}>
                                <User/>
                            </ProtectedRoute>
                        }
                    />
                    <Route path='*' element={<h2>Che aca no hay nada 404</h2>}/>
                </ReactDomRouter>
            </Layout>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default Routes