import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./Components/Navbar/Sidebar";
// import Nav from "./Components/Navbar/Nav";
import Mainsection from "./Components/Sections/Mainsection";
import Userdetails from "./Components/Sections/Userdetails";
import User from "./Components/Sections/User";
import Authentication from "./Helpers/Authentication";
import Login from "./Components/Sections/Login";

function App() {
  return (
    <>
      <Router>
        <div className="flex ">
          <div className="  flex   flex-col  lg:ms-[12.4vw]  xl:ms-[12.6vw] 2xl:ms-[12.5vw] border border-transparent sm:ms-[4vw] sm:mr-2 ">
            {/* <Nav />
            <Sidebar /> */}
            <Routes>
              <Route
                path="/"
                element={
                  <Authentication>
                    <Mainsection />
                  </Authentication>
                }
              />
              <Route path="/userdetails/:id" element={<Userdetails />} />
              <Route path="/user" element={<User />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </Router>

      {/* <Header/> */}
      {/* <Nav />
        <Sidebar /> */}

      {/* <Header/> */}

      {/* <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header/>} />
            <Route path="/:userdetails" element={<Userdetails/>} />
          </Routes > 
        </BrowserRouter>
        <Header />
      </div> */}
    </>
  );
}

export default App;
