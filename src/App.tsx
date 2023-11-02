import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <main className="w-full max-w-4xl px-6 mx-auto mb-8 min-h-[60vh] pt-28 lg:max-w-7xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
