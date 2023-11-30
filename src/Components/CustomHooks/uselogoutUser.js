import axios from "axios";
function useLogout() {
  const token = localStorage.getItem("token");
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
      return response;
    } catch (err) {
      return err;
    }
  };
  return {
    fetchData,
  };
}
export default useLogout;
