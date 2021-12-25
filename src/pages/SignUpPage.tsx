import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import { Dispatch } from "../store";

const SignUpPage: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();

  React.useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      dispatch.auth.setUser(JSON.parse(auth).user);
    }
  }, [dispatch.auth]);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h3 className="text-2xl mt-[5%]">
        Create a new{" "}
        <span className="text-[#27abe2] text-4xl font-thin">todos</span> account
      </h3>
      <SignUpForm />
      <div className="text-left border border-white-brd px-6 py-3 w-[320px] rounded-md mt-4">
        Already have an acoount?{" "}
        <Link to={"/signin"} className="text-blue-primary hover:underline">
          <br />
          Sign in now.
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
