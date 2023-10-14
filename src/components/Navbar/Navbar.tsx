import React from "react";
import { Link, NavLink } from "react-router-dom";
import { linksNavar } from "../../helpers";

const Navbar = () => {
  return (
    <>
      <header className="absolute w-full z-10  max-sm:absolute max-sm:top-4  bg-gray-300">
        <div className="container mx-auto ">
          <nav className="flex justify-between px-16">
            <Link to="/">
              <img
                src={"/Logo_sf.png"}
                alt="Logo"
                className="w-50 h-28 max-sm:w-16 max-sm:h-10"
              />
            </Link>
            <div className="flex items-center justify-center ">
              {linksNavar.map(({ label, path }, index) => (
                <NavLink
                  key={index}
                  to={path}
                  className={({ isActive, isPending }) =>
                    `${
                      isActive
                        ? "font-bold"
                        : isPending
                        ? "underline"
                        : "text-slate-700"
                    } relative rounded-lg px-3.5 py-2 text-black font-bold hover:bg-slate-600 hover:text-white max-sm:py-0.5 max-sm:px-1.5 max-sm:text-xs
                  `
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
