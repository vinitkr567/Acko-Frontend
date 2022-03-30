import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import NotFound from "../NotFound/NotFound";
import footer from "../footer/footer.jsx"

export default function Router() {
  return (
    <>
      <Navbar />
  
      <Routes>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
