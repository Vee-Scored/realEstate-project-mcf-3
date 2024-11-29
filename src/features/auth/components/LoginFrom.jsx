import { Link } from "react-router-dom";
import ButtonSpinner from "../../../components/ButtonSpinner";
import useLogin from "../hooks/useLogin";

const LoginFrom = () => {
  const { handleLogin, handleSubmit, errors, register, isSubmitting } =
    useLogin();

  return (
    <form
      className="space-y-4 md:space-y-6"
      onSubmit={handleSubmit(handleLogin)}
    >
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            },
          })}
          id="email"
          disabled={isSubmitting}
          className={`${
            errors.email
              ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
              : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
          } disabled:opacity-75 bg-slate-50 border  text-slate-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder="name@company.com"
          required
        />
        {errors.email?.type === "required" && (
          <p className="text-red-500 mt-2 text-sm">Email is required !</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="text-red-500 mt-2 text-sm">Invalid email address !</p>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: true,
            minLength: 8,
          })}
          disabled={isSubmitting}
          id="password"
          placeholder="••••••••"
          className={`${
            errors.password
              ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
              : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
          } disabled:opacity-75 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          required
        />
        {errors.password?.type === "required" && (
          <p className="text-red-500 mt-2 text-sm">Password is required !</p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="text-red-500 mt-2 text-sm">
            Password must be at least 8 letters !
          </p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-medium text-neutral-500 hover:underline dark:text-neutral-500"
        >
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full text-white flex disabled:pointer-events-none disabled:opacity-80 justify-center items-center gap-3 bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800"
      >
        Sign in
        {isSubmitting && <ButtonSpinner />}
      </button>
      <p className="text-sm font-light text-neutral-500 dark:text-neutral-400">
        Don’t have an account yet?{" "}
        <Link
          to="/register"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginFrom;
