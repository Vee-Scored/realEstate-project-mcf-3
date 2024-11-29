import { Toaster } from "react-hot-toast";
import LoginFrom from "../components/LoginFrom";
import AuthFrame from "../components/AuthFrame";

function LoginPage() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <Toaster position="top-right" />
      <AuthFrame>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
          <div className="w-full bg-neutral-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="font-heading font-semibold text-neutral-700 text-2xl lg:text-4xl mb-2">
                Sign in
              </h1>
              <span className="text-sm text-neutral-500">
                We’re happy to see you
              </span>
              <LoginFrom />
            </div>
          </div>
        </div>
      </AuthFrame>
    </section>
  );
}

export default LoginPage;
