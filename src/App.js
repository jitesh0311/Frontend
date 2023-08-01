import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";

import AdminPanel from "./views/AdminPanel";
import Lottery from "./views/Lottery";
import Login from "../src/components/Login"
import PastData from "./views/PastData";
import PastDataFB from "./views/PastDataFB";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/AdminPanel" element={<AdminPanel />} />
          <Route path="/Lottery" element={<Lottery />} />
          <Route path="/PastData" element={<PastData />} />
          <Route path="/PastDataFB" element={<PastDataFB />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
