import React, { useState } from "react";
import GifImg from "../assets/Gif Images/Animation - 1706715161095.gif";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { signInValidation } from "../Validations/SignInValidation";
import { axiosInstance } from "../AxiosInstance/AxiosInstance";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: signInValidation,
    onSubmit: (values, { resetForm }) => {
      handelSubmit();
      resetForm();
    },
  });
  const handelSubmit = async () => {
    setLoading(true);
    try {
      const registerValue = {
        email: formik?.values?.email,
        password: formik?.values?.password,
      };
      const response = await axiosInstance.post(
        `/api/v1/login`,

        registerValue
      );

      if (response.status === 200) {
        toast.success(response?.data?.message);
        localStorage.setItem(
          "refreshToken",
          response?.data?.data?.refreshToken
        );

        setLoading(false);
        navigate("/home");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="lg:flex justify-center items-center gap-5">
        <form
          action=""
          className="lg:w-1/2"
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
        >
          {/* personal Info */}
          <div className="wrapper">
            <div className="flex lg:w-full gap-x-5 py-2"></div>
            <div className="flex lg:w-full gap-x-5 py-2">
              {/* email */}
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="text-xl font-DmSans font-medium pb-1"
                >
                  Email
                </label>
                <div>
                  <input
                    className="w-full py-3 border-b border-border font-normal text-base"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your Email Address"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {/* error message */}
                  {formik.touched?.email && formik.touched.email ? (
                    <p className="text-red-600 text-sm font-normal font-DmSans mt-1 ">
                      {formik?.errors?.email}
                    </p>
                  ) : null}
                  {/* error message */}
                </div>
              </div>
              {/* email  */}
            </div>
            <div className="flex lg:w-full gap-x-5 py-2">
              {/* password */}
              <div className="flex-1">
                <label
                  htmlFor="password"
                  className="text-xl font-DmSans font-medium pb-1"
                >
                  Password
                </label>
                <div>
                  <input
                    className="w-full py-3 border-b border-border font-normal text-base"
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {/* error message */}
                  {formik.touched?.password && formik.touched.password ? (
                    <p className="text-red-600 text-sm font-normal font-DmSans mt-1 ">
                      {formik?.errors?.password}
                    </p>
                  ) : null}
                  {/* error message */}
                </div>
              </div>
              {/* password  */}
            </div>
          </div>
          {/* personal Info */}
          {/* login btn */}
          <div className="pt-10">
            <input
              disabled={loading}
              type="submit"
              value="Sign In"
              className={`px-14 py-4 cursor-pointer bg-btnBg text-whiteColor font-DmSans text-xl font-bold rounded-md`}
            />
          </div>
          {/* login btn */}
        </form>
        <div className="w-1/2 lg:block md:block hidden">
          <img className=" object-cover mx-auto" src={GifImg} alt="GifImg" />
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
