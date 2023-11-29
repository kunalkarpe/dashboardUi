import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
function useLogout() {
  const token = localStorage.getItem("token");
  const queryClient = useQueryClient;
  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://uatapicorporatetravel.fynity.in/api/logout",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      return err;
    }
  };
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: fetchData,
    staleTime: 5000,
  });
  console.log(data);
  if (isLoading) return "Loading";
  const cacheData = queryClient.getQueriesData(["user"]);
  return { data, cacheData };
}
export default useLogout;
