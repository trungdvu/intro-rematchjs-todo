import * as React from "react";

const SignUpForm: React.FC = () => {
  return (
    <form className="bg-white-bg text-left w-[320px] p-6 gap-1 flex flex-col mt-5 border rounded-md border-white-brd">
      <label htmlFor="login_field">Enter a your email</label>
      <input
        type="text"
        name="login"
        id="login_field"
        autoComplete="username"
        autoFocus={true}
        className="mb-3 input-primary"
      />
      <label htmlFor="password">Enter a password</label>
      <input
        type="password"
        name="password"
        id="password"
        autoComplete="current-password"
        autoFocus={true}
        className="mb-3 input-primary"
      />
      <label htmlFor="confirm_password">Confirm your password</label>
      <input
        type="password"
        name="confirm_password"
        id="confirm_password"
        autoFocus={true}
        className="mb-3 input-primary"
      />
      <input type="submit" value={"Sign up"} className="btn-primary"></input>
    </form>
  );
};

export default SignUpForm;
