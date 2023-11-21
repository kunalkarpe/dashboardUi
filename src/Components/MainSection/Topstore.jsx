const Topstore = () => {
  return (
    <>
      <div className="container  pt-14 mb-6">
        <div className="grid grid-cols-11">
          <div className="col-span-7 pl-10 pb-8 text-3xl font-bold ">
            Top Store
          </div>
          <div className="col-span-2 pl-4     text-xl">
            <button className="bg-lime-300 p-2.5  w-24 rounded-lg">Share</button>
          </div>
        </div>
        <div className="flex">
          <table className="table-auto">
            <thead>
              <tr className="text-slate-400 border-b-4      ">
                <th className="pl-6 text-2xl pb-8 font-light">Store Name </th>
                <th className="pl-40 text-2xl  pb-8 font-light">Location </th>
                <th className="pl-40 text-2xl pb-8  font-light">Sell</th>
                <th className="pl-44 text-2xl pb-8  font-light">Amount</th>
              </tr>
            </thead>

            <tbody className="">
              <tr>
                <td className="pl-6 pt-4 text-2xl pb-8 pt-8">Solaris Sparkle </td>
                <td className="pl-40 pt-4 text-2xl pb-8 pt-8">Miami, Florida</td>
                <td className="pl-40 pt-4 text-2xl pb-8 pt-8">102 Quantity </td>
                <td className="pl-44 pt-4 text-2xl pb-8 pt-8">12.50K</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="pl-6 text-2xl pb-8">Crimson Dusk</td>
                <td className="pl-40 text-2xl pb-8">Denver Clorida</td>
                <td className="pl-40 text-2xl pb-8">214 Quantity </td>
                <td className="pl-44 text-2xl pb-8">07.85K</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="pl-6 text-2xl pb-8">Indigo Zepher</td>
                <td className="pl-40 text-2xl pb-8">Orlano Florida</td>
                <td className="pl-40 text-2xl pb-8">143 Quantity </td>
                <td className="pl-44 text-2xl pb-8">17.40K</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="pl-6 text-2xl">Rosetee Crest </td>
                <td className="pl-40 text-2xl">Las Vegas ,Nevida</td>
                <td className="pl-40 text-2xl">185 Quantity </td>
                <td className="pl-44 text-2xl">16.40K</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Topstore;
