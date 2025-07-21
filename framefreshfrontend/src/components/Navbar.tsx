import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add blur & shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
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
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent border-none"
      }`}
    >
      {/* Topbar */}
      <div className="bg-gray-100 text-gray-700 text-xs sm:text-sm text-center py-2 px-4 select-none">
        আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন:{" "}
        <span className="font-medium text-blue-600 mx-1">+8801321208940</span> |{" "}
        <span className="font-medium text-blue-600 mx-1">হট লাইন: 09642-922922</span>
      </div>

      {/* Middle Bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 gap-6">
        {/* Left: Hamburger + Search */}
        <div className="flex items-center gap-5 text-gray-700 text-xl">
          <button
            className="md:hidden p-2 rounded-md hover:bg-blue-100 active:bg-blue-200 transition-transform duration-300"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            style={{
              transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          >
            <FaBars />
          </button>

          <div
            className="hover:text-blue-600 cursor-pointer transition-transform duration-300 hover:scale-110"
            aria-label="Search"
          >
            <FaSearch />
          </div>
        </div>

        {/* Center: Logo */}
        <div className="flex-1 text-center">
          <Link
            to="/"
            className="inline-block"
            style={{ width: "150px", height: "auto" }}
          >
            <img
              src="/image/clogo2.png"
              alt="FrameFresh Logo"
              className="mx-auto"
              style={{ display: "block", maxWidth: "100%", height: "auto" }}
            />
          </Link>
        </div>

        {/* Right: User + Cart */}
        <div className="flex items-center gap-6 text-gray-700 text-xl">
          <div className="hover:text-blue-600 cursor-pointer transition-transform duration-300 hover:scale-110">
            <FaUser />
          </div>

          <div className="hover:text-blue-600 cursor-pointer transition-transform duration-300 hover:scale-110">
            <FaShoppingCart />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-white border-b border-gray-200 md:static md:overflow-visible transition-[max-height,opacity,padding] duration-500 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100 py-2 px-4" : "max-h-0 opacity-0 px-4"
        } md:max-h-full md:opacity-100 md:px-0`}
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <ul
          className={`font-medium text-gray-700 space-y-1 md:space-y-0 md:flex md:flex-wrap md:justify-center md:gap-8 ${
            menuOpen ? "text-left" : ""
          }`}
        >
          {navLinks.map(([label, link]) => (
            <li
              key={link}
              className={`py-2 md:py-3 md:min-w-[140px] relative group cursor-pointer`}
              onClick={() => setMenuOpen(false)}
            >
              <Link
                to={link}
                className={`block transition-colors duration-300 hover:text-blue-600 ${
                  menuOpen ? "text-left" : "text-center md:text-left"
                }`}
              >
                {label}
              </Link>
              {/* Underline on hover */}
              <span
                className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
