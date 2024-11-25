const PropertyBtn = ({ text, onClick, className }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${className} text-xs bg-neutral-700 dark:bg-neutral-400 dark:hover:bg-neutral-500   text-white dark:text-black rounded-md px-2 py-2`}
      >
        {text}
      </button>
    </div>
  );
};

export default PropertyBtn;
