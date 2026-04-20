import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/Cart/Cart";
<<<<<<< HEAD
import PlaceOrder from "./pages/placeorder/PlaceOrder";
=======
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
>>>>>>> b7e9f35 (update frontend fixes)
import Footer from "./Components/Footer/Footer";
import ExploreMenu from "./Components/ExploreMenu/ExploreMenu";
import AppDownload from "./Components/AppDownload/AppDownload";
import LoginPopUp from "./Components/LoginPopUp/LoginPopUp";
import Verify from "./pages/Verify/Verify";
import MyOrder from "./pages/MyOrders/MyOrder";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
