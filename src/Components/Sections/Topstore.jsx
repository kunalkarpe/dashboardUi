 
const Topstore = () => {
  return (
    <>
      <div className="flex border border-transparent lg:w-full md:w-full">
        <div className=" lg:ms-12 2xl:ms-8 md:mx-2 lg:mt-8    lg:mb-4   lg:pb-4 md:mt-4  md:mb-4 md:pb-2 sm:mt-4 sm:ms-6  sm:mb-4 sm:px-2 lg:pt-4 bg-white rounded-2xl border border-transparent shadow-lg w-full">
          <div className="flex justify-between">
            <div className="flex lg:ms-6 md:ms-4 lg:pb-2 md:pb:1 sm:ms-2 sm:mt-2 text-xl font-bold ">Top Store</div>
            <div className="flex      text-sm font-semibold">
              <button className="bg-lime-300   lg:w-12 md:w-12 md:me-4 sm:w-12 sm:me-4   h-6 mr-8 rounded-lg">
                Share
              </button>
            </div>
          </div>

          <div className="flex items-center justify-evenly   border-slate-300 border-b-2 mx-2 mt-2">
            <p className="lg:pl-7 md:pl-5 text-md font-semibold pb-2 font-light">
              Store Name{" "}
            </p>
            <p className="pl-40 text-md font-semibold  pb-2 font-light">
              Location{" "}
            </p>
            <p className="pl-40 text-md font-semibold pb-2 font-light">Sell</p>
            <p className="pl-40 text-md font-semibold pb-2 font-light">
              Amount
            </p>
          </div>

          <div className="flex items-center justify-evenly border  border-transparent border-b-2 mx-2 mt-4">
            <p className="pl-7 text-md font-semibold pb-2 font-light">
              Solaris Sparkle
            </p>
            <p className="pl-32 text-md font-semibold  pb-2 font-light">
              Miami Florida
            </p>
            <p className="pl-36 pr-3 text-md font-semibold pb-2 font-light">
              102 Quantity
            </p>
            <p className="pl-28 text-md font-semibold pb-2 font-light">
              12.50k
            </p>
          </div>

          <div className="flex items-center justify-evenly border  border-transparent border-b-2 mx-2 mt-2">
            <p className="pl-7 text-md font-semibold pb-2 font-light">
              Crimson Dusk
            </p>
            <p className="pl-32 text-md font-semibold  pb-2 font-light">
              Denver , Coloroda
            </p>
            <p className="pl-32 text-md font-semibold pb-2 font-light">
              214 Quantity
            </p>
            <p className="pl-32 text-md font-semibold pb-2 font-light">
              71.85k
            </p>
          </div>

          <div className="flex items-center justify-evenly border  border-transparent border-b-2 mx-2 mt-2">
            <p className="pl-7 text-md font-semibold pb-2 font-light">
              Indiago Zephyr
            </p>
            <p className="pl-32 text-md font-semibold  pb-2 font-light">
              ORiando Florida
            </p>
            <p className="pl-32 text-md font-semibold pb-2 font-light">
              143 Quantity
            </p>
            <p className="pl-32 text-md font-semibold pb-2 font-light">
              16.40k
            </p>
          </div>

          <div className="flex items-center justify-evenly border  border-transparent border-b-2 mx-2 mt-2">
            <p className="pl-7 text-md font-semibold pb-2 font-light">
              Rosevet Crest
            </p>
            <p className="pl-32 text-md font-semibold  pb-2 font-light">
              LAs Vegas , Nevida
            </p>
            <p className="pl-32 text-md font-semibold pb-2 font-light">
              185 Quantity
            </p>
            <p className="pl-32 text-md font-semibold pb-2 font-light">
              23.64k
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topstore;
