import * as React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";

const SignUpPage: React.FC = () => {
  return (
    <div className="flex items-center flex-col min-h-screen">
      <h3 className="text-2xl mt-[5%]">
        Create a new{" "}
        <span className="text-[#27abe2] text-4xl font-thin">todos</span> account
      </h3>
      <SignUpForm />
      <div className="text-left border border-#[d8dee4] px-6 py-3 w-[320px] rounded-md mt-4">
        Already have an acoount?{" "}
        <Link to={"/signin"} className="text-[#27abe2] hover:underline">
          <br />
          Sign in now.
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
