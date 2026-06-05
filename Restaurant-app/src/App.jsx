import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername]= useState("");
  const [search, setSearch] = useState("");

  const removeFromCart = (indexToRemove) => {
  setCartItems(
    cartItems.filter((item, index) => index !== indexToRemove)
  );
    setCartCount(cartCount - 1);
  };
  const checkout = () => {
  alert("Order placed successfully!");
  setCartItems([]);
  setCartCount(0);
  };

 
  return (
    <>
      <Navbar cartCount={cartCount} 
       username={username}
       setUsername={setUsername}
       setShowLogin={setShowLogin}/>

       {showLogin && (
      <div className="login-box">
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={() => {
            setUsername(name);
            setShowLogin(false);
          }}
        >
          Login
        </button>
      </div>
    )}
      <Hero />
      <Menu setCartCount={setCartCount}
            setTotalPrice={setTotalPrice}
            setCartItems={setCartItems} 
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            checkout={checkout}
            search={search}
            setSearch={setSearch}/>
      <Footer />
    </>
  );
}

export default App;