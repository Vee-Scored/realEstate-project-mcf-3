import Container from "../../../components/Container";
import HomeBlogGroupSection from "../components/HomeBlogGroupSection";

const HomePage = () => {
  return (
    <Container>
      <section className="flex flex-col gap-10 items-start">
        <HomeBlogGroupSection />
      </section>
    </Container>
  );
};

export default HomePage;
