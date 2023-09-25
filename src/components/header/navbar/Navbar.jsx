import { NavLink } from "react-router-dom";
import Logo from "./logo";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center"> 

        <Logo></Logo>

        <ul className="flex inter gap-10 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
              }
            >
              Statistics
            </NavLink>
          </li>


        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
