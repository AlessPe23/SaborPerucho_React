import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Home, Ubication } from "./pages";
import Carta from "./pages/Carta/Carta";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
              <Route index element={<Home/>}/>
              <Route path="/Ubication" element={<Ubication/>}/>
              <Route path="/Carta" element={<Carta/>}/>
              <Route path="/About" element={<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
