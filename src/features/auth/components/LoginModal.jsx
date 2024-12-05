import { LucideX } from "lucide-react";
import LoginFrom from "./LoginFrom";

const LoginModal = ({ isOpen, setIsOpen, setResister }) => {
  const changeModal = () => {
    setIsOpen(false);
    setResister(true);
  };
  return (
    <>
      {/* Main modal */}
      <div
        onClick={() => setIsOpen(false)}
        className={`${
          isOpen ? "fixed" : "hidden"
        } overflow-y-auto overflow-x-hidden  top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-neutral-900 bg-opacity-50 py-4  flex`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative  p-4 w-full max-w-md max-h-full"
        >
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between  dark:border-gray-600">
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="end-2.5 my-4 mx-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <LucideX /> <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}

            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className=" font-heading font-bold text-neutral-700 text-2xl lg:text-4xl mb-4">
                Sign In
              </h1>
              <span className="text-sm text-neutral-500">
                We’re happy to see you
              </span>
              <LoginFrom changeModal={changeModal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
