import React from "react";
import {Routes,Route} from 'react-router-dom'
import Navbar from "./components/navbar/navbar";
import Cart from './screens/Cart/Cart'
import Home from './screens/Home/Home'
import PlaceOrder from './screens/PlaceOrder/PlaceOrder'
import Footer from "./components/Footer/Footer";

const App=()=>{
  return(
    <>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/order' element={<PlaceOrder/>}></Route>
       </Routes>

      </div>
      <Footer/>
    </>
  )
}

export default App;