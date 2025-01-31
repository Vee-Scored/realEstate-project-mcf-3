import Container from "../../../components/Container";
import BreadCrumb from "../../public/components/BreadCrumb";
import ProfileNameChangeCard from "../components/ProfileNameChangeCard";

const ProfileNameChangePage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb
          currentPageTitle={"Change Your Name"}
          links={[{ title: "User Profile", path: "/dashboard/user-profile" }]}
        />
        <ProfileNameChangeCard />
      </Container>
    </section>
  );
};

export default ProfileNameChangePage;
