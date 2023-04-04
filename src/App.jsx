import { About } from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Panini from "./pages/Panini";
import Kimlik from "./pages/Kimlik";
import Contact from "./pages/Contact";
import Referances from "./pages/Referances";
import { Help } from "./pages/Help";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/my-app/" element={<Home />} />
          <Route path="/my-app/about" element={<About />} />
          <Route path="/my-app/panini" element={<Panini />} />
          <Route path="/my-app/idscanner" element={<Kimlik />} />
          <Route path="/my-app/about" element={<About />} />
          <Route path='/my-app/help' element={<Help />} />
          <Route path="/my-app/referances" element={<Referances />} />
          <Route path="/my-app/iletisim" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
