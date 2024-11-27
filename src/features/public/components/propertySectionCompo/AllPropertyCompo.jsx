import SectionTitleComponent from "../../../../components/SectionTitleComponent";
import SearchForm from "./SearchForm";
import Container from "../../../../components/Container";

const AllPropertyCompo = () => {
  return (
    <div>
      <Container>
        <div className=" flex flex-col gap-16 py-16">
          <div className=" flex flex-col gap-4">
            <SectionTitleComponent name={"Properties"} />
            <h1 className=" text-5xl text-neutral-700 font-bold">
              All Properties
            </h1>
          </div>
          <SearchForm />
        </div>
      </Container>
    </div>
  );
};

export default AllPropertyCompo;
