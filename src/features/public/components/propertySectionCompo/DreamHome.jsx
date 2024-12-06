import { Link } from "react-router-dom";
import Container from "../../../../components/Container";
import { motion } from "framer-motion";

const DreamHome = () => {
  return (
    <div>
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="  my-16 bg-no-repeat py-10 flex justify-between items-center rounded-md px-4 md:px-10 bg-cover bg-dream-home bg-center shadow-md border"
        >
          <div className=" w-full grid lg:grid-cols-5 justify-between items-center    ">
            <div className="col-span-3 flex flex-col gap-4  md:w-[628px]">
              <h1 className=" text-neutral-700 font-extrabold text-3xl md:text-4xl  tracking-wide leading-10">
                Looking For Dream Home?
              </h1>
              <p className=" text-base md:text-lg text-neutral-500 leading-5 md:leading-7 tracking-wide font-normal font-sans">
                Prime condo located in downtown, just 10 minutes from lifestyle
                mall. Surrounded by lush parks, trendy cafes, and convenient
                public transit, this residence .
              </p>
            </div>
            <div className=" col-span-2  mt-3 md:mt-0 flex justify-end">
              <Link
                to="/contact-us"
                className=" px-6 py-3 rounded-md bg-primary-600 text-lg tracking-wide  text-neutral-50"
              >
                Check with us
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default DreamHome;
