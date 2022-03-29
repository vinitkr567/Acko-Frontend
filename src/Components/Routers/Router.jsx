import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";

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
