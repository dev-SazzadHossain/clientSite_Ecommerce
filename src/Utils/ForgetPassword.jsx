import { useFormik } from "formik";
import React, { useState } from "react";
import { axiosInstance } from "../AxiosInstance/AxiosInstance";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const [error, setError] = useState("");
  const initialValues = {
    oldPassword: "",
    newPassword: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      handelForgetPass();
      resetForm();
      setError("");
    },
  });
  const handelForgetPass = async () => {
    const changeInfo = {
      oldPassword: formik.values?.oldPassword,
      newPassword: formik.values?.newPassword,
    };

    const response = await axiosInstance.post(`/api/v1/forget`, changeInfo);
    if (response.status === 200) {
      toast.success(response?.data?.message);
    }
    setError(response.data?.message);
  };
  return (
    <form className="flex-1  w-full " onSubmit={formik.handleSubmit}>
      <h2 className="text-center text-xl font-DmSans font-extrabold">
        Forget Password
      </h2>
      {/* email */}
      <div className="flex-1">
        <label
          htmlFor="email"
          className="text-xl font-DmSans font-medium pt-2 inline-block"
        >
          Your Old Password
        </label>
        <div>
          <input
            required
            className="w-full py-3 border-b border-border font-normal text-base"
            type="text"
            name="oldPassword"
            id="oldPassword"
            placeholder="Your Old Password"
            onChange={formik.handleChange}
            value={formik.values.oldPassword}
          />
          {/* error message */}
          {error ? (
            <p className="text-red-600 text-sm font-normal font-DmSans mt-1 ">
              {error}
            </p>
          ) : null}
          {/* error message */}
        </div>
      </div>
      {/* email  */}
      {/* email */}
      <div className="flex-1">
        <label
          htmlFor="newPassword"
          className="text-xl font-DmSans font-medium pt-2 inline-block"
        >
          Your New Password
        </label>
        <div>
          <input
            className="w-full py-3 border-b border-border font-normal text-base"
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="Your New Password"
            onChange={formik.handleChange}
            value={formik.values.newPassword}
          />
          {/* error message */}
          {/* {error && !error == "Invalid old Password" ? (
            <p className="text-red-600 text-sm font-normal font-DmSans mt-1 ">
              {error}
            </p>
          ) : null} */}
          {/* error message */}
        </div>
        <input
          className="px-5 py-3 bg-black text-white rounded-lg mt-2 font-DmSans font-medium text-lg"
          type="submit"
          value="Submit"
        />
      </div>
      {/* email  */}
    </form>
  );
};

export default ForgetPassword;
