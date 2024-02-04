import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
    {/* Context provider named ShopContextProvider. Used to share state and functionality
    with components nested in the component tree. */}
      <ShopContextProvider>
        <Router>
          <Navbar /> 
          <Routes>
            <Route path="/" element={<Shop />} /> 
            {/* The path is "/", it renders the <Shop /> component on the landing page. */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
