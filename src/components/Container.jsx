import { useEffect } from "react";

const Container = ({ children, className }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className={`max-w-[1440px] w-full overflow-hidden px-3 sm:px-5 md:px-7 lg:px-10 xl:px-16 mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
