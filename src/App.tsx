import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./routes/Home";
import Gallery from "./routes/Gallery";
import Mailing from "./routes/Mailing";
import Shop from "./routes/Shop";
import History from "./routes/History";
import SuccessShop from "./routes/SuccessShop";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/mailing" element={<Mailing/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/success_shop" element={<SuccessShop/>} />
      </Routes>
    </div>
  );
}

export default App;
