import Categorias from "./components/Categorias/Categorias"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Layout from "./components/Layout/Layout"
import Navbar from "./components/Navbar/Navbar"
import Productos from "./components/Productos/Productos"

function App() {

  return (
      <>
        <Navbar/>
        <Layout>
          <Hero/>
          <Categorias/>
          <Productos/>
        </Layout>
        <Footer/>
      </>
  )
}

export default App
