import * as React from "react";
import { Link } from "react-router-dom";
import SignInForm from "../components/SignInForm";

const SignInPage: React.FC = () => {
  return (
    <div className="flex items-center flex-col min-h-screen">
      <h3 className="text-2xl mt-[5%]">
        Sign in to{" "}
        <span className="text-[#27abe2] text-4xl font-thin">todos</span>
      </h3>
      <SignInForm />
      <div className="text-left border border-#[d8dee4] px-6 py-3 w-[320px] rounded-md mt-4">
        New to Todos?{" "}
        <Link to={"/signup"} className="text-[#27abe2] hover:underline">
          Sign up now.
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
