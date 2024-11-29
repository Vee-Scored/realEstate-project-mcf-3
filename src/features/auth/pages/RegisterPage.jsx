import { Toaster } from "react-hot-toast";
import RegisterForm from "../components/RegisterForm";
import Container from "../../../components/Container";
import AuthFrame from "../components/AuthFrame";

const RegisterPage = () => {
  return (
    <section className={"bg-neutral-50 "}>
      <Container className={"!px-0"}>
        <Toaster />
        <AuthFrame>
          <RegisterForm />
        </AuthFrame>
      </Container>
    </section>
  );
};

export default RegisterPage;
