const Earning = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-x-12  mt-6">
        <div className="h-36 container col-span-2 bg-[#a7a3d7]    p-6 rounded-xl">
          <h4 className="font-semibold text-xl">Total earning</h4>
          <p className="flex justify-center text-3xl font-medium mt-2">242.65K</p>
          <p className="flex justify-center mt-1">From The Running Month</p>
        </div>
        <div className="h-36 container col-span-2 bg-[#63b5ed]   p-6 rounded-xl">
          <p className="font-semibold text-xl">Average earning</p>
          <p className="flex justify-center text-3xl font-medium mt-2">17.465K</p>
          <p className="flex justify-center mt-1">Daily Earning Of this  Month</p>
         
        </div>
        <div className="h-36 container col-span-2 bg-[#90e090]   p-6 rounded-xl">
          <h4 className="font-semibold text-xl">Conversion Rate</h4>
          <p className="flex justify-center text-3xl mt-2  font-medium">74.86%</p>
          <p className="flex justify-center mt-1">+6.04% Greater Than Last Month</p>
        </div>
      </div>
    </>
  );
};

export default Earning;
