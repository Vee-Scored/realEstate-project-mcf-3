import Container from "../../../components/Container";
import NewLetters from "../../../components/NewLetters";
import HomeBlogGroupSection from "../components/HomeBlogGroupSection";

const HomePage = () => {
  return (
    <Container>
      <section className="flex flex-col gap-10 items-start">
        <HomeBlogGroupSection />
        <NewLetters />
      </section>
    </Container>
  );
};

export default HomePage;
