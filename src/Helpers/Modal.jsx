import { GrFormClose } from "react-icons/gr";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { addToList } from "../Redux/Slice";
// eslint-disable-next-line react/prop-types
const Modal = ({ close }) => {
  // const [src, setSrc] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const sendData = async ({name,gender,email} , e) => {
    e.preventDefault();
    if (!name || !email || !gender) {
      alert("please Fil the data");
    } else {
      const response = await fetch("https://gorest.co.in/public/v2/users", {
        method: "POST",
        body: JSON.stringfy({
         name,email,gender
        }),
        headers: {
          "Content-Type": "application/json",
          "Authorization":
            "Bearer 220b6e43e8696b05af547f479f4f2727fb0a688d1bd1c4add2ea9c9ee31f1126",
        },
      });
      return response.json();
      // close()
    }
  };
  const { mutate } = useMutation(sendData, {
    onSucess: (sucessData) => {
      console.log(sucessData);
    },
  });
  // const [selectedImage, setSelectedImage] = useState(null);

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setSrc(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  const value = {
    name: name,
    email: email,
    gender: gender,
  };
  console.log(value);

  // https://gorest.co.in/public/v2/users

  // const dispatch = useDispatch();
   
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
                      name="email"
                      value={email}
                      type="email"
                      placeholder="Enter your job role"
                      className="border border-slate-300 rounded-lg ps-2  h-10 w-56"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex ">
                  <div className="col-span-4 mx-12 px-2">
                    <label className="border-b-2  border-slate-300">
                      Select Gender
                    </label>
                    <div className="mt-2">
                      <input
                        type="radio"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label htmlFor="male" className="ml-1">
                        Male
                      </label>

                      <input
                        type="radio"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                        className="ml-4"
                      />
                      <label htmlFor="female" className="ml-1">
                        Female
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  className="border border-transparent   rounded-lg bg-lime-300   mt-4 w-44  mx-20"
                  type="submit"
                >
                  <p
                    className="p-0.5 font-roboto"
                    onSubmit={async(values) =>
                     await mutate({ name:values.name,email:values.email,gender:values.gender })
                    }
                  >
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

// Name,email, gender(radio),
