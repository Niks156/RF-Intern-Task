import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Journey from "./components/Journey";
import Store from "./components/Store";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/store" element={<Store />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      {/* <Contact /> */}
    </>
  );
}
export default App;
