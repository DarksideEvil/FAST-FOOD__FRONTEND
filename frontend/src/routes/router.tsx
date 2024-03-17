import { Routes, Route } from "react-router-dom";
import { Home } from "../views/home";
import { About } from "../views/about";
import { DowloadApp } from "../views/download";
import { Register } from "../views/register";
import { Search } from "../views/search";
import { Location } from "../views/location";
import { Menu } from "../views/menu";
import { Reward } from "../views/rewards";
import { Cart } from "../views/cart";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="download" element={<DowloadApp />} />
      <Route path="register" element={<Register />} />
      <Route path="search" element={<Search />} />
      <Route path="location" element={<Location />} />
      <Route path="menu" element={<Menu />} />
      <Route path="reward" element={<Reward />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  )
}
