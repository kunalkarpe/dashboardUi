/* eslint-disable react/prop-types */
const Card = ({ backGround, name, number, title }) => {
  return (
    <>
      <div className="flex shrink  mt-2 items-center justify-center px-[1vw]">
        <div
          className={`  shrink   flex-col w-56   justify-center h-32 rounded-xl  ms-8    border border-transparent ${backGround}`}
        >
          <div className="  font-semibold text-md flex justify-center items-center mr-12 pt-2 ">
            {name}{" "}
          </div>
          <div className=" text-xl font-medium mt-2   flex justify-center items-center">
            {" "}
            {number}
          </div>
          <div className="   mt-2 text-sm flex justify-center items-center ">
            {" "}
            {title}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
