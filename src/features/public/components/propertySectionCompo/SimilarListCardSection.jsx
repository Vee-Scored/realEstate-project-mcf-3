import { useEffect, useState } from "react";
import data from "../../../../../data.json";

import PopularProperCard from "./PopularProperCard";

const SimilarListCardSection = () => {
  const [resultList, setResultList] = useState([]);
  useEffect(() => {
    setResultList(data);
  }, []);
  console.log(resultList.slice(0, 3));
  return (
    <div>
      <div className="xl:grid grid xl:grid-cols-3 gap-16 md:hidden grid-cols-1   justify-between items-center">
        {resultList.slice(0, 3).map((item) => (
          <PopularProperCard key={item.id} property={item} />
        ))}
      </div>
      <div className="md:grid xl:hidden md:grid-cols-2 gap-16 hidden justify-between items-center">
        {resultList.slice(0, 4).map((item, index) => (
          <PopularProperCard key={index} property={item} />
        ))}
      </div>
    </div>
  );
};

export default SimilarListCardSection;
