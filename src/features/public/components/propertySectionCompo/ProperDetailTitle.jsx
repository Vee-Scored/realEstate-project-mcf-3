const ProperDetailTitle = ({ className, text }) => {
  return (
    <div>
      <h1
        className={` text-neutral-700 font-bold font-heading text-xl md:text-3xl ${className}`}
      >
        {text}
      </h1>
    </div>
  );
};

export default ProperDetailTitle;
