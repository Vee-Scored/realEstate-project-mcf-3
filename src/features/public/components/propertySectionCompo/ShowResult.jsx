import Container from "../../../../components/Container";
import PopularProperCard from "./PopularProperCard";
import ShowResultPagination from "./ShowResultPagination";
import data from "../../../../../data.json";
import { useEffect, useState } from "react";

const ShowResult = () => {
  const [resultList, setResultList] = useState([]);

  useEffect(() => {
    setResultList(data);
  }, []);

  return (
    <div>
      <Container>
        <div className=" flex flex-col gap-16">
          <div>
            <h1>
              Show <span>5</span> of <span>21</span> results
            </h1>
          </div>
          {/* show cards section */}
          <div className="grid grid-cols-3 gap-16 ">
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
