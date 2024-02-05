import React, { useContext, useEffect, useState } from "react";
import { ProfileModal } from "../../Utils/ProfileModal";
import { axiosInstance } from "../../AxiosInstance/AxiosInstance";
import { toast } from "react-toastify";
import { AuthContextData } from "../../Context/AuthContext";

const Home = () => {
  const {
    data: registerUser,
    isLoading,
    refetch,
    isFetching,
  } = useContext(AuthContextData);
  const [open, setOpen] = useState(false);

  // -------------logout--------------------------
  const handelLogOut = async () => {
    const response = await axiosInstance.get("/api/v1/logout");
    if (response) {
      localStorage.removeItem("refreshToken");
      toast.success(response?.data?.message);
      isFetching;
    }
  };
  // -------------logout--------------------------
  return (
    <div className="container">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Logo</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={registerUser?.image || "not Found"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li onClick={() => setOpen(true)}>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li onClick={handelLogOut}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* modal profile */}
      {open && (
        <ProfileModal
          open={open}
          setOpen={setOpen}
          registerUser={registerUser}
          refetch={refetch}
        />
      )}
      {/* modal profile */}
    </div>
  );
};

export default Home;
