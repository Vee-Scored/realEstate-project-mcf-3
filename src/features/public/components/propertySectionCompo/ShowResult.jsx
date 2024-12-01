import Container from "../../../../components/Container";
import PopularProperCard from "./PopularProperCard";
import ShowResultPagination from "./ShowResultPagination";
import { useEffect, useState } from "react";
import useCardList from "../../../../stores/useCardList";

const ShowResult = () => {
  const { cards } = useCardList();
  // console.log(cards);
  const [resultList, setResultList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setResultList(cards);
  }, []);

  return (
    <div>
      <Container>
        <div className=" flex flex-col gap-7">
          <div>
            <h1>
              Show <span>5</span> of <span>21</span> results
            </h1>
          </div>
          {/* show cards section */}
          {/* for web desktop */}
          <div className="xl:grid  xl:grid-cols-3 gap-6 md:hidden hidden   justify-between items-center ">
            {resultList.slice((page - 1) * 9, 9 * page).map((item) => (
              <PopularProperCard key={item.id} property={item} />
            ))}
          </div>
          {/* for tablet  */}
          <div className="xl:hidden hidden md:grid-cols-2 gap-6 md:grid grid-cols-1   justify-between items-center ">
            {resultList.slice((page - 1) * 6, 6 * page).map((item) => (
              <PopularProperCard key={item.id} property={item} />
            ))}
          </div>
          {/* for mobile */}
          <div className="xl:hidden  md:hidden gap-6 grid grid-cols-1   justify-between items-center ">
            {resultList.slice((page - 1) * 3, 3 * page).map((item) => (
              <PopularProperCard key={item.id} property={item} />
            ))}
          </div>
          <ShowResultPagination setPage={setPage} />
        </div>
      </Container>
    </div>
  );
};

export default ShowResult;
