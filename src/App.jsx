import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import Home from "./components/Home";
import Collection from "./components/Collection";
import Checkout from "./components/Checkout";
import About from "./components/About";
import Contact from "./components/Contact";
import { CartProvider } from "./components/CartContext";
import Reviews from "./components/Reviews";
import Categories from "./components/Categories";


function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <CartProvider>
      <Router>
        <Navbar isScrolled={isScrolled} />
        <ShoppingCart />
        <AnimatedRoutes />
      </Router>
    </CartProvider>
  );
} 