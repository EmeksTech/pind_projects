import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="flex gap-6 bg-blue-700 p-4 text-white">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/students">Students</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default Navbar;
