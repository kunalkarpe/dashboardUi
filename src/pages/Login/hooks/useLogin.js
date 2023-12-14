import { useNavigate } from "react-router-dom";
import { loginMembers } from "../authQueries";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

function useLogin() {
  const navigate = useNavigate();

  //   State's
  // const [data, setData] = useState({
  //   email: "",
  //   password: "",
  //   device_name: "MacIntel",
  // });

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

  return { loginMutation};
}

export default useLogin;
