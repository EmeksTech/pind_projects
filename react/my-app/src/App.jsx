import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Students from "./pages/Students.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
