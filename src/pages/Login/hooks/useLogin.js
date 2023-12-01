import { useNavigate } from "react-router-dom";
import { loginMembers } from "../authQueries";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

function useLogin() {
  const navigate = useNavigate();

  //   State's
  const [data, setData] = useState({
    email: "",
    password: "",
    device_name: "windows",
  });

  // Query's

  const loginMutation = useMutation({
    mutationFn: (value) => {
      return loginMembers(value);
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.token);
      navigate("/");
    },
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    loginMutation.mutate(data);
  };

  return { handleLogin, data, handleChange };
}

export default useLogin;
