import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import WishList from "./pages/WishList";
import Error404 from "./pages/Error404";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/wishlist" element={<WishList />} />

        {/* 404 fallback */}
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
// Mainlayout is rendered once the pages inside it changes as per path 
// mainlayout contains the component of page which is repeating everytime
// like navbar the main section which contains all different pages
// and then footer