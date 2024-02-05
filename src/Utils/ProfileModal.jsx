import React, { useEffect } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../Styles/profile.css";

import ProfileChange from "./ProfileChange";
import ForgetPassword from "./ForgetPassword";
import { axiosInstance } from "../AxiosInstance/AxiosInstance";

export const ProfileModal = ({ open, setOpen, registerUser, refetch }) => {
  return (
    <div>
      <div className="w-full bg-red-300 ">
        <Modal open={open} center classNames="w-1/2 relative">
          <div className="  flex justify-center items-center gap-10">
            <ProfileChange registerUser={registerUser} refetch={refetch} />
            {/* forget password */}
            <ForgetPassword />
          </div>
          <button
            onClick={() => setOpen(false)}
            className=" absolute right-3 top-2 bg-slate-400 px-2 py-1 rounded-md text-white font-DmSans"
          >
            Close
          </button>
        </Modal>
      </div>
    </div>
  );
};
