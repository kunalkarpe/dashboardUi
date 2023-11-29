import { useState } from "react";
import loginImage from "../../assets/login.jpg";
import { useNavigate } from "react-router-dom";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    device_name: "windows",
  });

  const loginMembers = async (value) => {
    try {
      const response = await fetch(
        " https://uatapicorporatetravel.fynity.in/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(value),
        }
      );
      if (response.ok) {
        const result = await response.json();
        console.log(result.token);
        localStorage.setItem("token", result.token);
        navigate("/");
      } else {
        console.log("some error occured");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMembers(data);
  };

  return (
    <>
      <div className=" w-[80vw] h-[85vh] mt-20 -ms-12 border border-transparent bg-white rounded-lg">
        <div className="flex border border-transparent  items-center justify-center rounded-lg p-2">
          <h2 className="text-lg font-bold px-2 py-1 border-b-4 font-roboto">
            Login
          </h2>
        </div>
        <div className="flex">
          <div className="flex flex-col mt-4 ms-4 border border-slate-200 shadow-lg rounded-2xl  w-[40vw] justify-center items-center h-[50vh] ">
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
                className="border border-transaprent rounded-lg ms-2 p-1 mt-2"
                required
                onChange={handleChange}
              />
            </label>
            <button
              className="border border-transparent text-black p-1 rounded-lg ms-4 bg-lime-300 w-[8vw] ms-12 mt-4"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <div className="flex w-[40vw] h-[77vh] border border-transparent">
            <img src={loginImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
