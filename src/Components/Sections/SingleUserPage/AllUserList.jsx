import { MdKeyboardArrowRight, MdDeleteForever } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import EditModal from "../../../Helpers/EditModal";
import Modal from "../../../Helpers/Modal";
import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { fetchMembers, deleteMembers } from "../../../Api/api";
const AllUserList = () => {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [passData, setPassData] = useState({});
  const { id } = useParams();
  const queryClient = useQueryClient;
  const {
    data: allmembers,
    isLoading,
    isError,
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

  const handleUpdate = (data) => {
    setEdit(true);
    setPassData(data);
  };
  const handleDelete = (id) => {
    deleteMemberMutation.mutate(id);
  };
  const closeEdit = () => {
    setEdit(false);
  };
  const userList = allmembers?.filter((user) => user.id != id);
  const closeModal = () => {
    setShow(false);
  };
  const openModal = () => {
    setShow(true);
  };
  if (isLoading) return "Loading";
  if (isError) return "Error";
  return (
    <>
      <div className="container mt-5 border border-transparent px-1 flex flex-col">
        {userList?.map((user) => {
          return (
            <>
              <div className=" flex justify-around  border border-transparent rounded-2xl m-2 shadow-lg bg-zinc-200 p-2">
                <div className="flex flex-col border border-transparent w-[16vw] ">
                  <p className="flex  ">{user.name}</p>
                  <p className="flex   text-sm text-slate-500 break-words w-[4vw] ">
                    {user.email}
                  </p>
                  <p className="flex   text-sm text-slate-500  ">
                    {user.gender}
                  </p>
                </div>
                <button
                  className="cursor-pointer   ms-4"
                  onClick={() => handleUpdate(user)}
                >
                  <FaPen />
                </button>
                <button
                  className="cursor-pointer  "
                  onClick={() => handleDelete(user.id)}
                >
                  <MdDeleteForever />
                </button>
                <div className="flex  items-center justify-center self-center">
                  <Link to={`/singleuserdetails/${user.id}`}>
                    <MdKeyboardArrowRight />
                  </Link>
                </div>
              </div>
            </>
          );
        })}
        <button
          className=" flex border rounded-2xl text-sm border-transparent ms-16 my-2  w-[16vw] py-2 bg-blue-100 justify-center"
          onClick={openModal}
        >
          <div className="flex px-0.5 bg-white border rounded-full border-transparent ">
            <IoIosAdd className="h-5" />
          </div>
          <div className="flex"> Add More members</div>
        </button>
        {show && <Modal close={closeModal} />}
        {edit && <EditModal closed={closeEdit} data={passData} />}
      </div>
    </>
  );
};

export default AllUserList;
