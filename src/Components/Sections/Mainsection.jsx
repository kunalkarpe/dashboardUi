 
import Earning from "./Earning";
import Regularsale from "./Regularsale";
import Topstore from "./Topstore";
import Rightsidebar from "./Rightsidebar";

const Mainsection = () => {
  return (
    <>
      <div className="flex  lg:flex-row xl:flex-row 2xl:flex-row md:flex-col sm:flex-col lg:h-full xl:h-full 2xl:h-ful lg:mt-12 xl:mt-12 2xl:mt-12  ">
        <div className="flex justify-center flex-col border border-transparent  lg:w-[67.5vw] h-full ">
          <div className="flex px-4 justify-around sm:mt-16 md:mt-16 lg:mt-2 xl:mt-2 2xl:mt-2">
            <Earning />
          </div>
          <div className="flex">
            <Regularsale />
          </div>
          <div className="flex">
            <Topstore />
          </div>
        </div>
        <div className="flex border border-transparent lg:ms-2 lg:mt-2 md:mx-2 border border-transparent">
          <Rightsidebar />
        </div>
      </div>
    </>
  );
};

export default Mainsection;
