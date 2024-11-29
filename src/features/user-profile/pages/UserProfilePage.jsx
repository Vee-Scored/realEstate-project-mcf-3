
import Container from "../../../components/Container";
import BreadCrumb from "../../public/components/BreadCrumb";
import UserProfileCard from "../components/UserProfileCard";

const UserProfilePage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb currentPageTitle={"User Profile"} />
        <UserProfileCard />
      </Container>
    </section>
  );
};

export default UserProfilePage;
