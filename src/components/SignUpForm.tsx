import * as React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, loadingSelector } from "../helpers/selectors";
import { User } from "../helpers/types";
import { Dispatch } from "../store";
import Error from "./Error";
import LoadingSpin from "./LoadingSpin";

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const dispatch = useDispatch<Dispatch>();

  const loading = useSelector(loadingSelector);
  const auth = useSelector(authSelector);

  const password = React.useRef({});
  password.current = watch("password", "");

  React.useEffect(() => {
    dispatch.auth.setError("");
  }, [dispatch.auth]);

  const onSubmit = (data: User) => {
    dispatch.auth.signUpAsync(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white-bg text-left w-[320px] p-6 gap-1 flex flex-col mt-5 border rounded-md border-white-brd"
    >
      <label htmlFor="login_field">Enter a your email</label>
      <input
        {...register("email", { required: true })}
        type="text"
        name="email"
        id="email"
        autoComplete="email"
        className="input-primary"
      />

      <label htmlFor="password" className="mt-3">
        Enter a password
      </label>
      <input
        {...register("password", { required: true })}
        type="password"
        name="password"
        id="password"
        autoComplete="current-password"
        className="input-primary"
      />

      <label htmlFor="confirm_password" className="mt-3">
        Confirm your password
      </label>
      <input
        {...register("confirm_password", {
          required: true,
          validate: (value) =>
            value === password.current || "The passwords do not match!",
        })}
        type="password"
        name="confirm_password"
        id="confirm_password"
        className="input-primary"
      />
      {errors.confirm_password && (
        <Error>{errors.confirm_password.message}</Error>
      )}

      <button
        disabled={loading.effects.auth.signUpAsync}
        type="submit"
        className="flex items-center justify-center h-8 mt-3 text-center btn-primary"
      >
        {loading.effects.auth.signUpAsync ? <LoadingSpin /> : "Sign up"}
      </button>

      {auth.error && <Error>{auth.error}</Error>}
    </form>
  );
};

export default SignUpForm;
