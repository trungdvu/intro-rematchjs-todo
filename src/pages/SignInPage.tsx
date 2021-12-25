import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import { Dispatch } from "../store";

const SignInPage: React.FC = () => {
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
        Sign in to{" "}
        <span className="text-3xl font-thin text-blue-primary">
          <span className="font-medium text-black">Rematch</span>
          todos
        </span>
      </h3>
      <SignInForm />
      <div className="text-left border border-white-brd px-6 py-3 w-[320px] rounded-md mt-4">
        New to todos?{" "}
        <Link to={"/signup"} className="text-blue-primary hover:underline">
          Sign up now.
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
