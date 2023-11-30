import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
function useFetchUser() {
  const token = localStorage.getItem("token");
  const queryClient = useQueryClient();
  // const navigate = useNavigate();
  const fetchData = async () => {
    const response = await axios.get(
      "https://uatapicorporatetravel.fynity.in/api/user ",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  };
  const service = useQuery({
    queryKey: ["user"],
    queryFn: fetchData,
  });

  const cacheData = queryClient.getQueryData(["user"]);
  return { service, cacheData };
}
export default useFetchUser;
