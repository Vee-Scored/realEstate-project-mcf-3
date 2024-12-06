import { useEffect, useState } from "react";
// import data from "../../../../../data.js";

import PopularProperCard from "./PopularProperCard";
import useCardList from "../../../../stores/useCardList";

const SimilarListCardSection = ({ slug }) => {
  const { cards } = useCardList();
  const currentData = cards.find((d) => d.slug == slug);

  // console.log(cards);

  const similarLists = cards.filter((card) => card.type === currentData.type);

  const [resultList, setResultList] = useState([]);
  useEffect(() => {
    setResultList(similarLists);
  }, []);
  // console.log(resultList.slice(0, 3));
  return (
    <div>
      <div className="xl:grid grid xl:grid-cols-3 gap-6 md:hidden grid-cols-1   justify-between items-center ">
        {resultList.slice(0, 3).map((item) => (
          <PopularProperCard key={item.id} property={item} />
        ))}
      </div>
      <div className="md:grid xl:hidden md:grid-cols-2 gap-6 hidden justify-between items-center">
        {resultList.slice(0, 4).map((item, index) => (
          <PopularProperCard key={index} property={item} />
        ))}
      </div>
    </div>
  );
};

export default SimilarListCardSection;
