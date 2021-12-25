import * as React from "react";
import { Link } from "react-router-dom";
import SecondaryNav from "./SecondaryNav";

const Nav: React.FC = () => {
  return (
    <nav className="px-[2%] lg:px-[5%] flex justify-between items-center bg-white-bg border-b border-white-brd w-full py-5">
      <Link to={"/"} className="text-3xl font-thin text-blue-primary">
        <span className="font-medium text-black">Rematch</span>
        todos
      </Link>
      <SecondaryNav />
    </nav>
  );
};

export default Nav;
