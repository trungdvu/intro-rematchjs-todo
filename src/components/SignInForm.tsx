import * as React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, loadingSelector } from "../helpers/selectors";
import { User } from "../helpers/types";
import { Dispatch } from "../store";
import Error from "./Error";
import LoadingSpin from "./LoadingSpin";

const SignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch<Dispatch>();

  const auth = useSelector(authSelector);
  const loading = useSelector(loadingSelector);

  React.useEffect(() => {
    dispatch.auth.setError("");
  }, [dispatch.auth]);

  const onSubmit = (user: User) => {
    dispatch.auth.signInAsync(user);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white-bg text-left w-[320px] p-6 gap-1 flex flex-col mt-5 border rounded-md border-white-brd"
    >
      <label htmlFor="email">Email</label>
      <input
        {...register("email", { required: true })}
        type="text"
        name="email"
        id="email"
        defaultValue={"account@todos.com"}
        autoComplete="email"
        autoFocus={true}
        className="input-primary"
      />
      {errors.email && (
        <p className="text-xs text-red-500">Email is required</p>
      )}

      <label htmlFor="password" className="mt-3">
        Password
      </label>
      <input
        {...register("password", { required: true })}
        type="password"
        name="password"
        id="password"
        defaultValue={"trung1234"}
        autoComplete="current-password"
        autoFocus={true}
        className="input-primary"
      />
      {errors.password && <Error>Please enter your password</Error>}

      <button
        disabled={loading.effects.auth.signInAsync}
        type="submit"
        className="flex items-center justify-center h-8 mt-3 text-center btn-primary"
      >
        {loading.effects.auth.signInAsync ? <LoadingSpin /> : "Sign in"}
      </button>
      {auth.error && (
        <p className="w-full mt-4 text-xs text-left text-red-500">
          {auth.error}
        </p>
      )}
    </form>
  );
};

export default SignInForm;
