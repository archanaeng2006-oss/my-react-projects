import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sarees from "./pages/Sarees";
import Kurtis from "./pages/Kurtis";
import Western from "./pages/Western";
import HalfSaree from "./pages/HalfSaree";
import Cart from "./pages/Cart";
import "./App.css";

function App() {
  return (
    <div>

      <nav className="navbar">
        <h2>✨ Achu Fashion ✨</h2>

        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/sarees">Sarees</Link>
          <Link to="/kurtis">Kurtis</Link>
          <Link to="/western">Western Wear</Link>
          <Link to="/halfsaree">Half Saree</Link>
          <Link to="/cart">Cart 🛒</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sarees" element={<Sarees />} />
        <Route path="/kurtis" element={<Kurtis />} />
        <Route path="/western" element={<Western />} />
        <Route path="/halfsaree" element={<HalfSaree />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;