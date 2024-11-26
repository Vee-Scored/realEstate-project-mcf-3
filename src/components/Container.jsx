const Container = ({ children, className }) => {
  return (
    <div className={`max-w-[1440px] w-full overflow-hidden px-10 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
