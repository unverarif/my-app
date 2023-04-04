import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/my-app/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path='/help' element={<Help />} />
          <Route path='/panini' element={<Panini />} />
          <Route path='/idscanner' element={<Kimlik />} />
          <Route path="/referances" element={<Referances />} />
          <Route path="/iletisim" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
