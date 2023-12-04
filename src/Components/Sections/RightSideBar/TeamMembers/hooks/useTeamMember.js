import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { fetchMembers } from "../authQueries";
import { deleteMembers } from "../authQueries";
import { useQueryClient } from "@tanstack/react-query";

function useTeamMembers() {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [passData, setPassdata] = useState({});
  const queryClient = useQueryClient();
  const {
    isPending,
    isError,
    isSuccess,
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

  const handleDelete = (id) => {
    deleteMemberMutation.mutate(id);
  };
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
  if (isPending) return "Pending";
  if (isError) return "Error";
  console.log(response);
  if (isSuccess)
    return {
      response,
      handleDelete,
      closeModal,
      openModal,
      handleUpdate,
      closeEdit,
      show,
      edit,
      passData,
    };
}

export default useTeamMembers;
