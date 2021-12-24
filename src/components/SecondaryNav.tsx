import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authSelector } from "../helpers/selectors";
import { Dispatch } from "../store";

const SecondaryNav: React.FC = () => {
  const auth = useSelector(authSelector);
  const dispatch = useDispatch<Dispatch>();

  if (auth.currentUser) {
    return (
      <button
        onClick={() => dispatch.auth.signOutAsync()}
        className="hover:underline"
      >
        {auth.currentUser.email} (sign out)
      </button>
    );
  }

  return (
    <Link to={"/signin"} className="btn-primary">
      Sign in
    </Link>
  );
};

export default React.memo(SecondaryNav);
