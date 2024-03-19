import React from "react";
import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages";
import About from "../pages/About";
import Events from "../pages/events";
import AnnualReport from "../pages/annual";
import Teams from "../pages/team";
import Blogs from "../pages/blogs";
import SignUp from "../pages/signup";
import SignIn  from "../pages/signin";
function Header() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/annual" element={<AnnualReport />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default Header;
