import { useState, useEffect } from "react";
import type { KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";

type NavLink = [string, string];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    ["Best Seller", "/best-seller"],
    ["Mustard Oil", "/mustard-oil"],
    ["Ghee (ঘি)", "/ghe"],
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

  const handleTap = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLLIElement>, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleTap(index);
    }
  };

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
      <div className="flex items-center px-4 lg1180:px-6 py-3 border-b border-gray-200">
        {/* Left */}
        <div className="flex items-center gap-4 w-1/3 justify-start text-gray-700 text-lg lg1180:text-xl">
          <button
            className="lg1180:hidden p-2 rounded-md hover:bg-blue-100 active:bg-blue-200 transition-transform duration-300"
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
            className="hover:text-blue-600 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 active:scale-95"
            aria-label="Search"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") e.preventDefault();
            }}
          >
            <FaSearch />
          </div>
        </div>

        {/* Center: Logo */}
        <div className="w-1/3 flex justify-center">
          <Link to="/" className="inline-block">
            {/* Logo for mobile (hamburger visible) */}
            <img
              src="/image/clogo2.png"
              alt="Mobile Logo"
              className="mx-auto max-w-[100px] sm:max-w-[120px] h-auto block lg1180:hidden"
            />

            {/* Logo for large screens (hamburger hidden) */}
            <img
              src="/image/clogo2.png"
              alt="Desktop Logo"
              className="mx-auto max-w-[140px] lg1180:max-w-[160px] h-auto hidden lg1180:block"
            />
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 w-1/3 justify-end text-gray-700 text-lg lg1180:text-xl">
          <div className="hover:text-blue-600 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 active:scale-95" role="button" tabIndex={0}>
            <FaUser />
          </div>
          <div className="hover:text-blue-600 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 active:scale-95" role="button" tabIndex={0}>
            <FaShoppingCart />
          </div>
        </div>
      </div>

     {/* Desktop Navigation Menu */}
<nav
  className="bg-white border-b border-gray-200 transition-all duration-300 ease-in-out hidden lg1180:block"
  style={{ maxWidth: "1100px", margin: "0 auto" }}
>
  <ul className="font-medium text-gray-700 px-2 py-1 flex flex-wrap justify-center gap-3">
    {navLinks.map(([label, link], index) => (
      <li
        key={link}
        className={`py-1 min-w-[90px] text-sm relative group cursor-pointer transition-transform duration-300 ease-in-out ${
          activeIndex === index ? "text-blue-600" : "hover:text-blue-600"
        }`}
        onClick={() => handleTap(index)}
        onKeyDown={(e) => handleKeyDown(e, index)}
        tabIndex={0}
        aria-expanded={activeIndex === index}
        aria-haspopup="true"
      >
        <Link
          to={link}
          className="block px-2 py-[2px] rounded-md transition-colors duration-300 hover:bg-blue-50 text-center"
        >
          {label}
          <span
            className={`absolute left-0 bottom-0 w-0 h-[1.5px] bg-blue-600 rounded-full transition-all duration-300 ease-in-out ${
              activeIndex === index ? "w-full" : "group-hover:w-full"
            }`}
            aria-hidden="true"
          />
        </Link>
      </li>
    ))}
  </ul>
</nav>


{/* Mobile Hamburger Menu (Only When Open) */}
{menuOpen && (
 <nav className="bg-white border-t border-gray-200 lg1180:hidden h-[66vh] w-[66vw] overflow-y-auto">
  {/* Optional Logo or Heading */}


  <ul className="font-medium text-gray-700 px-4 py-3 space-y-2">
    {navLinks.map(([label, link], index) => (
      <li
        key={link}
        className={`py-2 relative group cursor-pointer transition-transform duration-300 ease-in-out ${
          activeIndex === index ? "text-blue-600" : "hover:text-blue-600"
        }`}
        onClick={() => {
          setMenuOpen(false);
          handleTap(index);
        }}
        onKeyDown={(e) => handleKeyDown(e, index)}
        tabIndex={0}
        aria-expanded={activeIndex === index}
        aria-haspopup="true"
      >
        <Link
          to={link}
          className="block px-3 py-2 rounded-md transition-colors duration-300 hover:bg-blue-50 text-left"
        >
          {label}
          <span
            className={`absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 ease-in-out ${
              activeIndex === index ? "w-full" : "group-hover:w-full"
            }`}
            aria-hidden="true"
          />
        </Link>
      </li>
    ))}
  </ul>
</nav>

)}

    </header>
  );
}
