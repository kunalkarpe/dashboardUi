import { useNavigate } from "react-router-dom";
const Authentication = ({children}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);
  if (token) {
    // navigate("/");
    return children;
  } else {
    navigate("/user");
  }
};

export default Authentication;
