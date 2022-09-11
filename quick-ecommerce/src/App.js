import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
const App = () => {
  return (
  <>
  
  <BrowserRouter>
<Navbar/>
              <Routes>
              <Route exact path='/' element={< Home />}/>
                <Route path='/Register' element={< Register />}/>
                <Route path='/Login' element={< Login />}/>

              </Routes>
<Footer/>
            </BrowserRouter>
 </>)
};

export default App;