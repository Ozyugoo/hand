import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="font-sans font-light ">
      <ul className="flex space-x-6 text-sm font-semibold cursor-pointer text-gray">
        <li className="hover:text-colors focus:text-focus">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
