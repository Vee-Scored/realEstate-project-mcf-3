import { FaApple, FaGoogle } from "react-icons/fa";
import ButtonSpinner from "../../../components/ButtonSpinner";
import useRegister from "../hooks/useRegister";
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    handleRegister,
    errors,
    password,
    isSubmitting,
  } = useRegister();

  return (
    <section className="flex flex-col gap-3 justify-center   ">
      <div className=" p-6 px-8 py-4  rounded">
        <div className=" flex  flex-col gap-3  mb-5">
          <div className="">
            <h2 className=" font-heading font-bold text-neutral-700 text-2xl lg:text-4xl mb-2">
              Create Account
            </h2>
            <p className="text-sm font-normal text-neutral-500">
              Enter your information below to create your account
            </p>
          </div>

          <div className="flex justify-between items-center w-full gap-4">
            <button className="flex justify-center items-center hover:bg-neutral-100 active:bg-neutral-200 gap-2 border border-neutral-200 rounded-md w-full py-1 ">
              <FaApple />
              <span className="text-neutral-700 font-normal text-base">
                {" "}
                Apple
              </span>
            </button>
            <button className="flex justify-center items-center hover:bg-neutral-100 active:bg-neutral-200 gap-2 border border-neutral-200 rounded-md w-full py-1 ">
              <FaGoogle />
              <span className="text-neutral-700 font-normal text-base">
                {" "}
                Google
              </span>
            </button>
          </div>
          <div className=" flex justify-between items-center">
            <div className="h-[1px] w-full bg-neutral-200" />
            <span className=" font-normal text-neutral-500 text-xs px-1 py-2 bg-white text-center text-nowrap">
              OR CONTINUE WITH
            </span>
            <div className="h-[1px] w-full bg-neutral-200" />
          </div>
        </div>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="space-y-2 lg:space-y-3"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              disabled={isSubmitting}
              {...register("name", {
                required: true,
                minLength: 3,
                maxLength: 50,
              })}
              className={`${
                errors.name
                  ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                  : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
              } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded disabled:opacity-75 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="eg. John Doe"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500 mt-2 text-sm">Name is required !</p>
            )}
            {errors.name?.type === "minLength" && (
              <p className="text-red-500 mt-2 text-sm">
                Name must be at least 3 letters !
              </p>
            )}
            {errors.name?.type === "maxLength" && (
              <p className="text-red-500 mt-2 text-sm">
                Name must not be at more than 50 letters !
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              email
            </label>
            <input
              type="email"
              id="email"
              disabled={isSubmitting}
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                },
              })}
              className={`${
                errors.email
                  ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                  : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
              } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded disabled:opacity-75 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="eg. john@company.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: true,
                minLength: 8,
              })}
              disabled={isSubmitting}
              placeholder="••••••••"
              className={`${
                errors.password
                  ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                  : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
              } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded disabled:opacity-75 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              required
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500 mt-2 text-sm">
                Password is required !
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 mt-2 text-sm">
                Password must be at least 8 letters !
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="••••••••"
              disabled={isSubmitting}
              {...register("password_confirmation", {
                required: true,
                validate: (value) =>
                  value == password || "Passwords do not match",
              })}
              className={`${
                errors.password_confirmation
                  ? "focus:border-red-500 focus:ring-red-500 border-red-500 "
                  : "focus:ring-green-300 focus:border-green-300 border-slate-300  "
              } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded disabled:opacity-75 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              required
            />
            {errors.password_confirmation?.type === "required" && (
              <p className="text-red-500 mt-2 text-sm">
                Please confirm your password !
              </p>
            )}
            {errors.password_confirmation?.type === "validate" && (
              <p className="text-red-500 mt-2 text-sm">
                {errors.password_confirmation.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center items-center gap-3 disabled:pointer-events-none disabled:opacity-80 text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded  text-sm px-5 py-2.5 text-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800"
          >
            Create account
            {isSubmitting && <ButtonSpinner />}
          </button>
        </form>
      </div>
      <p className="text-xs font-normal text-neutral-500 text-center mb-6">
        By clicking continue, you agree to our <br /> Terms of Service and
        Privacy Policy.
      </p>
    </section>
  );
};

export default RegisterForm;
