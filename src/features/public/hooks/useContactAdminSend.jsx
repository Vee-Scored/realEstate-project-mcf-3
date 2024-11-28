import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const useContactAdminSend = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();

  const handleSend = async (data) => {
    console.log(data);
    toast.success("Send Message Successfully");
    reset();
  };

  return {
    handleSend,
    handleSubmit,
    register,
    isSubmitting,
  };
};

export default useContactAdminSend;
