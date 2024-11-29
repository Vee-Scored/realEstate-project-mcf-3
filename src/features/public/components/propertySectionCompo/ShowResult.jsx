import Container from "../../../../components/Container";
import PopularProperCard from "./PopularProperCard";
import ShowResultPagination from "./ShowResultPagination";
import { useEffect, useState } from "react";
import useCardList from "../../../../stores/useCardList";

const ShowResult = () => {
  const { cards } = useCardList();

  const [resultList, setResultList] = useState([]);

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

          <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-5">
            {resultList.map((item) => (
              <PopularProperCard key={item.id} property={item} />
            ))}
          </div>
          <ShowResultPagination />
        </div>
      </Container>
    </div>
  );
};

export default ShowResult;
