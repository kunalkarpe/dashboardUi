import { useState, useMemo } from "react";
// import mdata from "@src/pages/Mockuser/MocakData/MOCK_DATA";
import mdata from "@src/pages/Mockuser/MocakData/NewMockData";
import Deletetoast from "@src/pages/Mockuser/Toast/Deletetoast";

function useMockUser() {
  const data = useMemo(() => mdata, []);
  const [mockData, setMockData] = useState(data);
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [toogle, setToogle] = useState(false);
  const [show, setShow] = useState(false);
  const [popoverItemId, setPopoverItemId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openEditMoadal, setOpenEditMoadal] = useState(false);
  const [editData, setEditData] = useState();
  const openAddModal = () => {
    setOpenModal(true);
  };
  const close = () => {
    setOpenModal(false);
    setOpenEditMoadal(false);
  };

  const handleDelete = (id) => {
    const deletedData = mockData.filter((data) => data.id !== id);
    setMockData(deletedData);
    setShow(false);
    Deletetoast();
  };

  const handleEdit = (data) => {
    setOpenEditMoadal(true);
    setEditData(data);
  };

  const handleToogle = () => {
    if (toogle == false) {
      setToogle(true);
    } else {
      setToogle(false);
    }
  };

  const togglePopover = (itemId) => {
    setPopoverItemId(itemId);
    if (show == false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return {
    data,
    handleEdit,
    handleDelete,
    togglePopover,
    handleToogle,
    close,
    openAddModal,
    mockData,
    setMockData,
    sorting,
    setSorting,
    filtering,
    setFiltering,
    toogle,
    show,
    setShow,
    openModal,
    editData,
    openEditMoadal,
    popoverItemId,
  };
}

export default useMockUser;
