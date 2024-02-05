import React, { useEffect, useRef, useState } from "react";
import { SlCloudUpload } from "react-icons/sl";
import { axiosInstance } from "../AxiosInstance/AxiosInstance";
import { toast } from "react-toastify";

const ProfileChange = ({ registerUser, refetch }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const ref = useRef();
  const handelClickProfile = (e) => {
    ref.current.click();
    setFile(ref.current.files[0]);
  };

  const handelUpload = async (e) => {
    if (file) {
      setLoading(true);
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", file);

      try {
        const uploadImage = await axiosInstance.post(
          "/api/v1/uploadImage",
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (uploadImage?.data?.success == true) {
          toast.success("upload Profile Successfully");
          setLoading(false);
          refetch();
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <form onSubmit={handelUpload}>
      {/* profile picture */}
      <h2 className="text-center">{registerUser?.firstName}</h2>
      <div className="w-[200px] p-3  flex flex-col justify-center items-center">
        <div className=" shadow-lg  h-[100px]  w-[100px]  rounded-full relative group/profile transition-all duration-300 ease-linear cursor-pointer profile_pic">
          <img
            src={registerUser?.image || file}
            alt="Picture"
            className="w-full h-full object-cover absolute left-0 right-0 rounded-full bg-black z-10"
          />
          <div className="hidden group-hover/profile:block absolute transition-all duration-300 left-[35px] rounded-full   top-[35px]  ease-linear  z-30  ">
            <input
              ref={ref}
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              name="file"
              id="file"
              hidden
            />
            <SlCloudUpload
              onClick={handelClickProfile}
              size="30"
              color="white"
              className=""
            />
          </div>
        </div>
        <button
          disabled={!file?.name}
          type="submit"
          className=" text-lg font-bold text-white text-center pt-1 px-3 py-2 bg-green-400 mt-1 rounded-md"
        >
          {loading ? "Uploading......" : "Upload Picture"}
        </button>
      </div>
      {/* profile picture */}
    </form>
  );
};

export default ProfileChange;
