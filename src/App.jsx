import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Navbar/Sidebar";
import Nav from "./Components/Navbar/Nav";
import Mainsection from "./Components/Sections/Mainsection";
import Userdetails from "./Components/Sections/Userdetails";
import User from "./Components/Sections/User";

function App() {
  
  return (
    <>
      
        <Router>
          <div className="flex ">
            <Sidebar />
            <div className="  flex   flex-col  lg:ms-[12.4vw]  xl:ms-[12.6vw] 2xl:ms-[12.5vw] border border-transparent sm:ms-[4vw] sm:mr-2 ">
              <Nav />

              <Routes>
                <Route path="/" element={<Mainsection />} />
                <Route path="/userdetails/:id" element={<Userdetails />} />
                <Route path="/user" element={<User />} />
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
