import "./App.css";

import { Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Members from "./pages/Members";
import MemberCard from "./pages/MemberCard";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/users" element={<Members />} />
        <Route path="/user/:id" element={<MemberCard />} />
      </Routes>
    </>
  );
};

export default App;
