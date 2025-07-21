import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">

      {/* --------- Topbar (visible on all screens) --------- */}
      <div className="bg-gray-100 text-gray-700 text-xs md:text-sm text-center py-2 px-4">
        আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন: 
        <span className="font-medium text-blue-600 mx-1">+8801321208940</span> | 
        <span className="font-medium text-blue-600 mx-1">হট লাইন: 09642-922922</span>
      </div>

      {/* --------- Middle Bar --------- */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 text-xl mr-3">
            <FaBars />
          </button>
        </div>

        {/* Left: Search (desktop only) */}
        <div className="hidden md:flex items-center text-gray-700 text-xl">
          <FaSearch />
        </div>

        {/* Center: Logo */}
        <div className="flex-1 text-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            FrameFresh
          </Link>
        </div>

        {/* Right: Account + Cart (desktop) | Cart only (mobile) */}
        <div className="flex items-center text-gray-700 space-x-4 text-xl">
          <div className="hidden md:block">
            <FaUser />
          </div>
          <div>
            <FaShoppingCart />
          </div>
        </div>
      </div>

      {/* --------- Main Navbar --------- */}
      <nav className="bg-white border-b border-gray-200 px-4 py-2">
        <ul
          className={`
            md:flex md:space-x-6 md:items-center justify-center font-medium text-gray-700
            ${menuOpen ? "block" : "hidden"} md:block
          `}
        >
          <li className="mt-2 md:mt-0">
            
          </li>
          {[
            ["Best Seller", "/best-seller"],
            ["Mustard Oil", "/mustard-oil"],
            ["Ghee (ঘি)", "/ghee"],
            ["Dates (খেজুর)", "/dates"],
            ["খেজুর গুড়", "/khajur-gur"],
            ["Honey", "/honey"],
            ["Masala", "/masala"],
            ["Nuts & Seeds", "/nuts-seeds"],
            ["Tea/Coffee", "/tea-coffee"],
            ["Honeycomb", "/honeycomb"],
            ["Organic Zone", "/organic-zone"],
            ["About", "/about"],
            ["Contact", "/contact"],
          ].map(([label, link]) => (
            <li key={link} className="mt-1 md:mt-0">
              <Link
                to={link}
                className="hover:text-blue-600 transition block md:inline-block"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
