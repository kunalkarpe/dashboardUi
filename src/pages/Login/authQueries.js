import axios from "axios";
const loginMembers = async (value) => {
  try {
    const response = await axios.post(
      " https://uatapicorporatetravel.fynity.in/api/sellers/login",
      value,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export { loginMembers };
