import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetchUser from "../Components/CustomHooks/fetchData.js";
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { service } = useFetchUser();

  useEffect(() => {
    if (service.status == "error") {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [service.status]);

  if (service.isLoading) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
