import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchMembers } from "@src/Components/Sections/Api/api";

const SearchSingleUser = () => {
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: list,
  } = useQuery({
    queryKey: ["listkey"],
    queryFn: fetchMembers,
  });

  const singleMember = list?.find((member) => member.id == id);

  if (isLoading) return "Pending";
  if (isError) return "Error";
  return (
    <>
      <section className="flex border border-transparent  mt-20 p-2">
        <div className="flex justify-between border border-transparent w-full">
          <div className="flex border border-transparent px-8 py-2">
            <div
              className="container flex flex-col border border-transparent shadow-lg rounded-xl mt-2    w-[40vw] h-[56vh] bg-slate-50"
              key={singleMember?.id}
            >
              <div className="text-2xl font-semibold  mt-4 ms-8 flex">
                Name : {singleMember?.name}
              </div>
              <div className="text-lg font-semibold mt-5 ms-8 ">
                Email : {singleMember?.email}
              </div>
              <div className="text-lg font-semibold mt-5 ms-8 ">
                Gender : {singleMember?.gender}
              </div>
              <div className="mt-5 ms-9 flex flex-col">
                <p className="text-md font-semibold flex">Descripton :</p>
                <p className="mt-2 text-md font-roboto flex">
                  {singleMember?.name} is a been working as a for last 2 years
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchSingleUser;
