import Container from "../../../../components/Container";
import PopularProperCard from "./PopularProperCard";
import ShowResultPagination from "./ShowResultPagination";
import { useEffect, useState } from "react";
import useCardList from "../../../../stores/useCardList";
import { motion } from "framer-motion";

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
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Show <span>5</span> of <span>21</span> results
            </motion.h1>
          </div>
          {/* show cards section */}
          {/* for web desktop */}
          <div className="xl:grid  xl:grid-cols-3 gap-6 md:hidden hidden   justify-between items-center ">
            {resultList.slice((page - 1) * 9, 9 * page).map((item, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                viewport={{ once: true }}
                key={item.id}
              >
                <PopularProperCard property={item} />
              </motion.div>
            ))}
          </div>
          {/* for tablet  */}
          <div className="xl:hidden hidden md:grid-cols-2 gap-6 md:grid grid-cols-1   justify-between items-center ">
            {resultList.slice((page - 1) * 6, 6 * page).map((item, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                viewport={{ once: true }}
                key={item.id}
              >
                <PopularProperCard property={item} />
              </motion.div>
            ))}
          </div>
          {/* for mobile */}
          <div className="xl:hidden  md:hidden gap-6 grid grid-cols-1   justify-between items-center ">
            {resultList.slice((page - 1) * 3, 3 * page).map((item, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                viewport={{ once: true }}
                key={item.id}
              >
                <PopularProperCard property={item} />
              </motion.div>
            ))}
          </div>
          <ShowResultPagination setPage={setPage} />
        </div>
      </Container>
    </div>
  );
};

export default ShowResult;
