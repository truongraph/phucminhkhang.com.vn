import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/home/homepage";
import AboutPage from "./pages/home/about";


export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Trang chủ */}
        <Route path="/about" element={<AboutPage />} /> {/* Trang About */}
      </Routes>
    </Router>
  );
}
