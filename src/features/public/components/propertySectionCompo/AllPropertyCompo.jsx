import SectionTitleComponent from "../../../../components/SectionTitleComponent";
import SearchForm from "./SearchForm";
import Container from "../../../../components/Container";
import { motion } from "framer-motion";

const AllPropertyCompo = () => {
  return (
    <div>
      <Container>
        <div className=" flex flex-col  gap-16">
          <div className=" flex flex-col gap-4">
            <SectionTitleComponent name={"Properties"} />
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className=" text-5xl text-neutral-700 font-bold"
            >
              All Properties
            </motion.h1>
          </div>
          <SearchForm />
        </div>
      </Container>
    </div>
  );
};

export default AllPropertyCompo;
