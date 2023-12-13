// import { Route, Routes } from "react-router-dom";
import Nav from "../../Components/Navbar/Nav";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Mainsection from "../../Components/Sections/MainSection/Mainsection";
// import { Link, Route, Routes } from "react-router-dom";
// import User from "../../Components/Sections/JSONplaceholderUser";

const index = () => {
  return (
    <>
      <div>
        <Nav />
        <Sidebar />
        <Mainsection />

        {/* <Routes>
          <Route path="/home" element={<Mainsection />} />
          <Route path="/user" element={<User />} />
        </Routes> */}
      </div>
    </>
  );
};

export default index;
