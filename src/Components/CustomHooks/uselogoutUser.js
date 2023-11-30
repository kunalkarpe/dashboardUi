import axios from "axios";
function useLogout() {
  const token = localStorage.getItem("token");
  const fetchData = async () => {
    const response = await axios.post(
      "https://uatapicorporatetravel.fynity.in/api/logout",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  };
  return {
    fetchData,
  };
}
export default useLogout;
