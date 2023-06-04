import React from "react";
import { Route, Routes } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/header";
import Main from "./components/main/main";
import './App.css'
import "@fontsource/montserrat";
import "@fontsource/nunito-sans";
import Footer from "./components/footer/footer";
import Card from "./components/pages/card/card";
import NotFound from "./components/pages/not-found/not-found";
import Product from "./components/pages/product/product";
import Login from "./components/pages/login/login";
import Register from "./components/pages/register/register";
import Checkout from "./components/pages/checkout/checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const currentPath = window.location.pathname;

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/card" element={<Card />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
