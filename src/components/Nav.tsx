import * as React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <nav className="px-[2%] lg:px-[5%] flex justify-between items-center bg-white-bg border-b border-white-brd w-full py-5">
      <h3 className="text-3xl font-thin text-blue-primary">todos</h3>
      <Link to={"/signin"} className="btn-primary">
        Sign in
      </Link>
    </nav>
  );
};

export default Nav;
