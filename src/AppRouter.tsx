import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/home/homepage";
import NotFound from "./pages/home/notfound";


export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
