import useLogin from "./hooks/useLogin";
import loginImage from "../../Ui/Images/login.jpg";

const Login = () => {
  const { data, handleLogin, handleChange } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
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
            <div className="flex flex-col mt-12 ">
              <label htmlFor="Email ">
                Email:{" "}
                <input
                  type="text"
                  name="email"
                  value={data.email}
                  placeholder="Enter your email"
                  className="border border-transaprent rounded-lg ms-8 p-1"
                  required
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="Password">
                Password:
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  placeholder="Enter your password"
                  className="border border-transaprent rounded-lg ms-2 p-1 mt-4"
                  required
                  onChange={handleChange}
                />
              </label>
              <button
                className="border border-transparent text-black p-1 rounded-lg ms-20 bg-lime-300 w-[8vw]  mt-12"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
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
