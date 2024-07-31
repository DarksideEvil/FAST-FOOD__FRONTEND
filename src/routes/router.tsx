import { Routes, Route, useLocation } from "react-router-dom";
import { About } from "../views/about";
import { DowloadApp } from "../views/download";
import { Register } from "../views/register";
import { Search } from "../views/search";
import { Location } from "../views/location";
import { Menu, } from "../views/menu";
import { Reward } from "../views/rewards";
import { Cart } from "../views/cart";
import { Chat } from "../views/chat";
import { Product } from "../views/product";
import { Navbar } from "../components/navbar";
import { Payment } from "../views/payment";
import { Account } from "../views/account";
import { Condiment } from "../views/condiment";

export const MainRouter = () => {

  const location = useLocation();

  // Define routes that should NOT display the navbar
  //'/register', ...
  const showNavbarRoutes: string[] = ['/payment'];

  return (
    <>
      {!showNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="about" element={<About />} />
        <Route path="download" element={<DowloadApp />} />
        <Route path="register" element={<Register />} />
        <Route path="location" element={<Location />} />
        <Route path="menu" element={<Menu />} />
        <Route path="reward" element={<Reward />} />
        <Route path="cart" element={<Cart />} />
        <Route path="chat" element={<Chat />} />
        <Route path="product" element={<Product />} />
        <Route path="payment" element={<Payment />} />
        <Route path="account" element={<Account />} />
        <Route path="extras" element={<Condiment />} />
      </Routes>
    </>
  )
}
