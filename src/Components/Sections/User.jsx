import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react"; 

const fetchUser = async () => {
  const user = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);
  return user;
};

const User = () => {
  const {
    isLoading,
    error,
    data: user,
  } = useQuery({
    queryKey: ["userKey"],
    queryFn: fetchUser,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [userId, setUserId] = useState(0);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
 const totalPages = Math.ceil((user?.length / itemsPerPage))
  // console.log(totalPages)
  const userData = user?.slice(startIndex, endIndex);

  const handleNextpage = (id) => {
    setUserId(id);
    setCurrentPage(currentPage + 1);
    // console.log(user.id,"is user id")
  };
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  if (isLoading) {
    return (
      <>
        <p className="mt-16 ms-20">Loading...</p>
      </>
    );
  }
  if (error) {
    console.log(error);
  }

  return (
    <>
      <div className="mt-16 ms-10 border border-tansparent shadow-xl text-sm bg-white">
        <div className="relative">
          <div className="flex flex-row bg-slate-300  border-b-2 w-[82vw] justify-between  px-2 py-2 fixed m  ">
            <div className="flex ms-6">Name</div>
            <div className="flex ms-0">Username</div>
            <div className="flex ms-0">Email</div>
            <div className="flex ms-0 ">Phone</div>
            <div className="flex mr-0 ">Website</div>
            <div className="flex  mr-4">Company</div>
            <div className="flex  mr-8">Address</div>
          </div>

          {userData?.map((user) => {
            return (
              <>
                <div
                  className="flex flex-wrap flex-row justify-between w-[82vw] text-sm  px-2 py-3 "
                  key={user.id}
                >
                  <div className="flex flex-wrap px-2  mt-8 w-36 border border-transparent text-center justify-center   mt-8">
                    {user.name}
                  </div>
                  <div className="flex flex-wrap px-2 w-36 justify-center text-center   mt-8 ">
                    {user?.username}
                  </div>
                  <div className="flex flex-wrap px-2 w-36 justify-center text-center  mt-8">
                    {user.email.toLowerCase()}
                  </div>
                  <div className="flex flex-wrap px-2  w-36 justify-center   mt-8">
                    {user.phone}
                  </div>
                  <div className="flex flex-wrap px-2 w-36 justify-center  mt-8">
                    {user.website}
                  </div>
                  <div className="flex  flex-wrap px-2 w-36 justify-center text-center  mt-8">
                    {user?.company?.name}
                  </div>
                  <div className="flex flex-wrap px-2 w-36 justify-center border border-transparent text-center mt-8">
                    {user?.address?.street}
                    {user?.address?.city}
                  </div>
                </div>
              </>
            );
          })}
          <div className="flex border border-transparent   justify-center mr-8 mb-4">
            <div
              className={`flex border border-transparent  bg-slate-300   rounded-lg justify-center mr-8 mb-4 `}
            >
              <button
                disabled={currentPage == 1}
                onClick={handlePrevPage}
                className="p-1"
              >
                {" "}
                Prev
              </button>
            </div>
            {}
            
            <div
              className={`flex border border-transparent ms-8 rounded-lg bg-slate-300 mb-4  "} `}
            >
              <button
                onClick={() => handleNextpage(user.id)}
                disabled={
                 currentPage == totalPages 
                }
                className={` p-1`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
