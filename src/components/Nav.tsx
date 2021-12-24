import * as React from "react";
import SecondaryNav from "./SecondaryNav";

const Nav: React.FC = () => {
  return (
    <nav className="px-[2%] lg:px-[5%] flex justify-between items-center bg-white-bg border-b border-white-brd w-full py-5">
      <h3 className="text-3xl font-thin text-blue-primary">todos</h3>
      <SecondaryNav />
    </nav>
  );
};

export default Nav;
