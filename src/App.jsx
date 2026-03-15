import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import CustomSteel from "./components/services/CustomSteel";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/services/custom-steel" element={<CustomSteel />} />
    </Routes>
  );
}

export default App;