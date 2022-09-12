import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import Profile from "./pages/Profile";
import AddProduct from "./pages/AddProduct";
const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={< Home />} />
          <Route path='/Register' element={< Register />} />
          <Route path='/Login' element={< Login />} />
          <Route path='/Profile' element={< Profile />} />
          <Route path='/Add-Product' element={< AddProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>)
};

export default App;