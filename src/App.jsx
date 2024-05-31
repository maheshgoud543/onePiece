import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Arcs from './Components/Pages/Arcs/Arcs';
import Home from './Components/Pages/Home/Home';
import Characters from './Components/Pages/Characters/Characters';
import DevilFruits from './Components/Pages/DevilFruits/DeviFruits';
import Maps from './Components/Pages/Maps/Maps'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/DevilFruits" element={<DevilFruits />} />
        <Route path="/Arcs" element={<Arcs />} />
        <Route path="/Maps" element={<Maps />} />
      </Routes>
    </div>
  )
}

export default App;
