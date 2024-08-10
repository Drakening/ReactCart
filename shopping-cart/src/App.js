import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { ShopContextProvider } from "./context/shop-context";

// Lazy load pages
const Shop = lazy(() => import("./pages/shop/shop"));
const Contact = lazy(() => import("./pages/contact"));
const Cart = lazy(() => import("./pages/cart/cart"));

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              {/* 404 Route */}
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </Suspense>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
