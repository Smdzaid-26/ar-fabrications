import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import CustomSteel from "./components/services/CustomSteel";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      {/* Custom Steel Page */}
      <Route path="/services/custom-steel" element={<CustomSteel />} />

      {/* Dynamic Service Pages */}
      <Route path="/services/:slug" element={<ServiceDetail />} />

    </Routes>
  );
}

export default App;