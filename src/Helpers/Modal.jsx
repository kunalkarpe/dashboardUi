import { GrFormClose } from "react-icons/gr";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToList } from "../Redux/Slice";
// eslint-disable-next-line react/prop-types
const Modal = ({ close }) => {
  const [src, setSrc] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  // const [selectedImage, setSelectedImage] = useState(null);


   

   const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const value = {
    id: new Date().getTime(),
    src: src,
    name: name,
    title: title,
  };
  console.log(value);
  const dispatch = useDispatch();
  const sendData = (e) => {
    e.preventDefault();
    if (!src || !name || !title) {
      alert("please Fil the data");
    } else {
      dispatch(addToList(value));
      close();
    }
  };
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-slate-200 bg-opacity-90 z-50">
        <div className=" container   fixed ">
          <div className="  rounded-2xl bg-slate-100 w-80 h-80 border border-transparent shadow-lg top-5 relative top-[25vh] left-[40%]  ">
            <div className="text-lg px-8  mt-4 underline underline-offset-8">
              Add new Members
            </div>
            <button
              onClick={close}
              className="mt-5 border border-black relative hover:cursor   -top-11 left-72  rounded-full"
            >
              <GrFormClose />
            </button>{" "}
            <div className="-top-20">
              <form action="" method="post">
                <div className="grid grid-cols-10 py-2">
                  <div className="col-span-8 mx-12 px-2 ">
                    <input
                    
                      name="name"
                      value={name}
                      type="text"
                      placeholder="Enter your Name "
                      className="border border-slate-300 rounded-lg ps-2 h-10 w-56"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-10 py-2">
                  <div className="col-span-4 mx-12 px-2">
                    <input
                      name="title"
                      value={title}
                      type="text"
                      placeholder="Enter your job role"
                      className="border border-slate-300 rounded-lg ps-2  h-10 w-56"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-10 py-2">
                  <div className="col-span-4 mx-14 px-2 border border-black border-slate-300 rounded-lg p-1 w-56 bg-white">
            
                    <input
                      name="src"
                      accept="image/*" 
                      type="file"
                      
                      className="  border-slate-300 rounded-lg ps-2"
                      onChange={handleImageChange}
                    /> 
                  </div>
                </div>
                <button
                  className="border border-transparent   rounded-lg bg-lime-300   mt-4 w-44  mx-20"
                  type="submit"
                  
                >
                  <p className="p-0.5 font-roboto" onClick={sendData}>
                    Submit
                  </p>{" "}
                </button>
              </form>
            </div>
          </div>
          
           
        </div>
      </div>
    </>
  );
};

export default Modal;
