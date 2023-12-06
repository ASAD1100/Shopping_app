import Navbar from './components/navbar/navbar';
import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Cart from "./components/pages/cart"
import LoginSignup from "./components/pages/loginSignup"
import  Product from "./components/pages/product"
import  Shop from "./components/pages/shop"
import ShopCategory from "./components/pages/shopCategory"
import Footer from './components/footer/Footer';
import men_banner from "./components/assets/banner_mens.png"
import women_banner from "./components/assets/banner_women.png"
import kid_banner from "./components/assets/banner_kids.png"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />{/*will be available in all the components*/}
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids"/>}/>

        <Route path="product " element ={<Product/> }/>
        <Route path=':productId' element={<Product/>}/>
        
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>}/>

        


      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
