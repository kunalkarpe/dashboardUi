import "./App.css";
import.meta.env;
import { Routes, Route } from "react-router-dom";
// import Mainsection from "./Components/Sections/Mainsection";
import User from "./Components/Sections/JSONplaceholderUser";
import ProtectedRoute from "./Helpers/ProtectedRoute";
import Login from "./pages/Login//index";
import Userdetails from "./Components/Sections/SingleUserPage/Userdetails";
import Home from "./pages/Home/index";

function App() {
  return (
    <>
      <div className="flex ">
        <div className="  flex   flex-col  lg:ms-[12.4vw]  xl:ms-[12.6vw] 2xl:ms-[12.5vw] border border-transparent sm:ms-[4vw] sm:mr-2 ">
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
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
    </>
  );
}

export default App;
