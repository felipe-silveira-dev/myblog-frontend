import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import UserProvider from "./contexts/UserContext";
import RegisterUser from "./pages/user/register/RegisterUser";

function App() {
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Navbar />
          <main className="w-full max-w-4xl px-6 mx-auto mb-8 min-h-[60vh] pt-28 lg:max-w-7xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<h1>Not Found</h1>} />
              <Route path="/users/create" element={<RegisterUser />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
