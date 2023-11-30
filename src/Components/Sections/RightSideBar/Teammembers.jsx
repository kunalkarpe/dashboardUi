import { useState } from "react";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { fetchMembers } from "../../../Api/api";
import { deleteMembers } from "../../../Api/api";
import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import Modal from "../../../Helpers/Modal";
import EditModal from "../../../Helpers/EditModal";
const Teammembers = () => {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [passData, setPassdata] = useState({});
  const queryClient = useQueryClient();
  const {
    isLoading,
    isError,
    data: response,
  } = useQuery({
    queryKey: ["listkey"],
    queryFn: fetchMembers,
  });

  const deleteMemberMutation = useMutation({
    mutationFn: deleteMembers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listkey"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if (isLoading) return "loading...";

  const handleDelete = (id) => {
    deleteMemberMutation.mutate(id);
  };
  if (isLoading) return "Loading";
  if (isError) return "Error";
  const closeModal = () => {
    setShow(false);
  };
  const openModal = () => {
    setShow(true);
  };
  const handleUpdate = (data) => {
    setEdit(true);
    setPassdata(data);
  };

  const closeEdit = () => {
    setEdit(false);
  };
  return (
    <>
      <div className="flex bg-white lg:mt-4 lg:mb-2 lg:ms-3 rounded-xl lg:w-[16.5vw] md:w-[35vw] md:ms-0 md:me-2 sm:w-[35vw] sm:ms-0 sm:me-2 md:h-fit border border-transparent">
        <div className="flex flex-col lg:mt-4 md:mt-2 ">
          <p className="text-lg font-bold lg:ms-4 lg:mb-4 md:ms-2 md:mb-2 sm:ms-4 sm:mb-2 sm:mt-2 font-roboto">
            Team Member
          </p>
          {response.map((data, index) => {
            return (
              <>
                <div
                  className="flex justify-around w-[16.5vw] lg:my-2 md:my-1 sm:my-1  border border-transparent rounded-2xl shadow-lg"
                  key={index}
                >
                  <div className="flex flex-col p-2 w-[15vw]">
                    <button className="flex lg:ms-4 md:ms-0 sm:ms-1 text-sm">
                      {data.name}
                    </button>
                    <div className="flex text-xs  lg:ms-4 md:ms-0  sm:ms-1 text-slate-400 text-ellipsis overflow-hidden">
                      {data.email}
                    </div>
                  </div>
                  <div className="flex lg:-ms-2 cursor-pointer md:me-4 sm:me-2 items-center justify-center self-center h-[2vh ]">
                    <button
                      className="cursor-pointer   "
                      onClick={() => handleUpdate(data)}
                    >
                      <FaPen className="h-[1.5vh] w-[1.5vw] " />
                    </button>
                    <button
                      className="cursor-pointer  "
                      onClick={() => handleDelete(data.id)}
                    >
                      <MdDeleteForever />
                    </button>
                    <Link to={`/singleuserdetails/${data.id}`}>
                      <MdKeyboardArrowRight />
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
          <button
            className="border-transparent rounded-2xl text-sm border-transparent-transparent lg:ms-4 lg:my-2 lg:py-1.5  lg:px-9 md:px-8 md:ms-2 md:my-2  md:py-1.5  sm:px-8 sm:ms-2 sm:my-2  sm:py-1.5 bg-blue-100 flex space-x-2"
            onClick={openModal}
          >
            <div className="px-0.5 bg-white border-transparent rounded-full border-transparent-transparent ">
              <IoIosAdd className="h-5" />
            </div>
            <div> Add More members</div>
          </button>
          {show && <Modal close={closeModal} />}
          {edit && <EditModal closed={closeEdit} data={passData} />}
        </div>
      </div>
    </>
  );
};

export default Teammembers;
