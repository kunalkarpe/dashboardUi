import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetchUser from "../Components/Navbar/Hooks/usefetchData.js";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { service } = useFetchUser();

  useEffect(() => {
    if (service.isLoading) return () => {};
    if (service.status == "error") {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [service.status, service.isLoading]);
  if (service.isLoading) {
    return (
      <>
        <p>Loading....</p>
      </>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
