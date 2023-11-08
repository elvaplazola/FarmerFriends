import "./App.css";
import {useState, useEffect} from 'react'
//import Axios from 'axios'
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import livestock_banner from "./Components/Assets/livestock_banner.png";
import produce_banner from "./Components/Assets/produce_banner.jpg";
import supplies_banner from "./Components/Assets/supplies_banner.jpg";
import Footer from "./Components/Footer/Footer";

function App() {
  const [serverData, setServerData] = useState([{}])

  useEffect(() => {
   fetch('/api')
   .then(response => response.json())
   .then(data => {setServerData(data)})
  }, [])
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/livestock"
            element={
              <ShopCategory banner={livestock_banner} category="livestock" />
            }
          />
          <Route
            path="/produce"
            element={
              <ShopCategory banner={produce_banner} category="produce" />
            }
          />
          <Route
            path="/supplies"
            element={
              <ShopCategory banner={supplies_banner} category="supplies" />
            }
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
