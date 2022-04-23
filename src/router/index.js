import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import HotCollection from "../components/hotCollectionSection";

import Dashboard from "../pages/dashboard";
const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/rca" exact element={<HotCollection />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
