const ShowResultPagination = ({ setPage }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling animation
    });
  };
  const handlePageChange = (e) => {
    setPage(e.target.value);
    scrollToTop();
    // console.log(e.target.value);
  };
  return (
    <>
      <div className=" flex justify-center gap-8 leading-5 text-sm items-center">
        <p className=" text-sm leading-5 text-neutral-500">Page</p>

        <form action="">
          <div>
            <select
              onChange={handlePageChange}
              id="countries"
              className=" border   border-gray-300 text-neutral-500   focus:ring-neutral-300 focus:border-neutral-300 text-center  rounded-lg   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
            >
              <option value={1} selected>
                1
              </option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </div>
        </form>
        <p className=" text-sm leading-5 text-neutral-500">of {10}</p>
      </div>
    </>
  );
};

export default ShowResultPagination;
