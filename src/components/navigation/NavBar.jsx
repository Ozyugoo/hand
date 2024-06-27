import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="font-sans font-light cursor-pointer">
      <div className="btn-menu">
        <div onClick={toggleMenu} className="lg:hidden">
          <svg
            className=""
            width="44"
            height="40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 16h32M6 28h32" stroke="#000" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <ul
        onClick={closeMenu}
        className={`lg:flex space-x-6 text-sm font-semibold cursor-pointer text-gray md:bg-inherit bg-darkBtn absolute md:relatve md:left-[35%] left-20 z-50 w-1/2 top-0 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li className="hover:text-colors focus:text-focus m-6 ">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="m-6">
          <Link to="/" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li className="m-6">
          <Link to="/" onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li className="m-6">
          <Link to="/" onClick={closeMenu}>
            Blog
          </Link>
        </li>
        <li className="m-6">
          <Link to="/" onClick={closeMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
