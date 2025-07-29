// App.jsx
//import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import BestSeller from "./pages/BestSeller";
import MustardOil from "./pages/MustardOil";
import Ghee from "./pages/Ghee";
import Dates from "./pages/Dates";
import KhajurGur from "./pages/KhajurGur";
import Honey from "./pages/Honey";
import Masala from "./pages/Masala";
import NutsSeeds from "./pages/NutsSeeds";
import TeaCoffee from "./pages/TeaCoffee";
import Honeycomb from "./pages/Honeycomb";
import OrganicZone from "./pages/OrganicZone";

export default function App() {
  return (
     <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Navbar/header */}
      <Navbar />

      {/* Main content: grows to fill remaining vertical space */}
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Offer Zone Routes */}
          <Route path="/best-seller" element={<BestSeller />} />
          <Route path="/mustard-oil" element={<MustardOil />} />
          <Route path="/ghe" element={<Ghee />} />
          <Route path="/dates" element={<Dates />} />
          <Route path="/khajur-gur" element={<KhajurGur />} />
          <Route path="/honey" element={<Honey />} />
          <Route path="/masala" element={<Masala />} />
          <Route path="/nuts-seeds" element={<NutsSeeds />} />
          <Route path="/tea-coffee" element={<TeaCoffee />} />
          <Route path="/honeycomb" element={<Honeycomb />} />
          <Route path="/organic-zone" element={<OrganicZone />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-500">
        &copy; 2025 FrameFresh. All rights reserved.
      </footer>
    </div>
  );
}
