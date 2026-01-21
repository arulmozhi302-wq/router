import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Pages/Home"
import User from "./Pages/User"
import Navbar from "./Pages/Navbar"
import Product from "./Pages/Product"
import ProductDetail from "./Pages/ProductDetail"


function App() { 

  return (
    <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>} />
               <Route path="/User" element={<User/>} />
                <Route path="/Navbar" element={<Navbar/>} />
                 <Route path="/Product" element={<Product/>} />
                  <Route path="/ProductDetail" element={<ProductDetail/>} />

          </Routes>      
      </BrowserRouter>      
        
    </>
  )
}

export default App
