import "./App.css";
import.meta.env;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./Components/Navbar/Sidebar";
// import Nav from "./Components/Navbar/Nav";
import Mainsection from "./Components/Sections/Mainsection";
import Userdetails from "./Components/Sections/Userdetails";
import User from "./Components/Sections/User";
import ProtectedRoute from "./Helpers/ProtectedRoute";
import Login from "./Components/Sections/Login";

function App() {
  return (
    <>
      <Router>
        <div className="flex ">
          <div className="  flex   flex-col  lg:ms-[12.4vw]  xl:ms-[12.6vw] 2xl:ms-[12.5vw] border border-transparent sm:ms-[4vw] sm:mr-2 ">
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Mainsection />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/singleuserdetails/:id"
                element={
                  <ProtectedRoute>
                    <Userdetails />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/user"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/login"
                element={
                  <ProtectedRoute>
                    <Login />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
