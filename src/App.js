import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Journey from "./components/Journey";
import Product from "./components/Product";
import Store from "./components/Store";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/store" element={<Store />} />
        <Route path="/team" element={<Team />} />
        <Route path="/store/product" element={<Product />} />
      </Routes>
    </>
  );
}
export default App;
