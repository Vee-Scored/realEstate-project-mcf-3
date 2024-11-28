import { Toaster } from "react-hot-toast";
import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import AuthFrame from "../components/AuthFrame";

const RegisterPage = () => {
  return (
    <section className={"bg-neutral-50"}>
      <Container>
        <Toaster />
        <AuthFrame>
          <RegisterForm />
        </AuthFrame>
      </Container>
    </section>
  );
};

export default RegisterPage;
