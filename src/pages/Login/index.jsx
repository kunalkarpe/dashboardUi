import useLogin from "./hooks/useLogin";
import loginImage from "../../Ui/Images/login.jpg";
import GlobalForm from "@src/Helpers/GLobalForm";

const Login = () => {
  const { loginMutation } = useLogin();
  const defaultValues = {
    email: "",
    password: "",
    device_name: "MacIntel",
  };
  const inputFields = [
    {
      name: "email",
      type: "email",
      placeholder: "Enter your  email... ",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Invalid email address",
      },
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];
  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <>
      <section className=" w-[80vw] h-[85vh] mt-20 -ms-12 border border-transparent bg-white rounded-lg">
        <div className="flex border border-transparent  items-center justify-center rounded-lg p-2">
          <h2 className="text-lg font-bold px-2 py-1 border-b-4 border-lime-300 font-roboto">
            Niond
          </h2>
        </div>
        <div className="flex  ">
          <div className="flex flex-col mt-8 ms-4 border border-transaprent shadow-lg rounded-2xl  w-[40vw] justify-center items-center h-[50vh]  ">
            <div className="flex     -mt-12 ">
              <h2 className="text-lg font-bold px-2     font-roboto">Login</h2>
            </div>

            <GlobalForm
              onSubmit={onSubmit}
              defaultValues={defaultValues}
              inputFields={inputFields}
            />
          </div>
          <div className="flex w-[40vw] h-[77vh] border border-transparent">
            <img src={loginImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
