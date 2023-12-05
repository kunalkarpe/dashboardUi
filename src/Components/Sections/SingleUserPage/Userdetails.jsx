import Sidebar from "@src/Components/Sidebar/Sidebar";
import Nav from "@src/Components/Navbar/Nav";
import SingleUserDeatils from "./SingleUser";
import AllUserList from "./AllUserList";
import SearchUser from "./SearchUser";
const Userdetails = () => {
  return (
    <>
      <Nav />
      <Sidebar />
      <div className="flex ">
        <SingleUserDeatils />
        <div className="flex flex-col px-8 py-4 mt-20">
          <div className="bg-white px-4 border border-transparent rounded-2xl shadow-2xl ms-20">
            <div className="relative   w-[28vw] border border-transparent  rounded-2xl mt-4 ">
              <SearchUser />
              <AllUserList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Userdetails;
