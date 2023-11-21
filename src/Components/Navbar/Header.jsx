import Nav from "./Nav";

const Header = () => {
  return (
    <>
      {/* <div className="  grid  grid-cols-13  bg-slate-100"> */}
        {/* <div className=" col-start-1 col-end-2   border border-orange-800 w-72 h-screen pt-4 bg-white">
          <div className="">Niod</div>
        </div> */}
        <div className="col-start-3  col-end-13   w-full h-24 mt-4 py-4     content-center flex items-center">
          <Nav />
        </div>
       
      {/* </div> */}
    </>
  );
};

export default Header;
