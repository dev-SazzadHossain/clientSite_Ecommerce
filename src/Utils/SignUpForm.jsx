import React, { useState } from "react";
import GifImg from "../assets/Gif Images/Animation - 1706715161095.gif";
import { useFormik } from "formik";
import { signUpValidation } from "../Validations/SignUpValidation";
import axios from "axios";
import { axiosInstance } from "../AxiosInstance/AxiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    address1: "",
    address2: "",
    city: "",
    division: "",
    district: "",
    password: "",
    repeatPassword: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: signUpValidation,
    onSubmit: (values, { resetForm }) => {
      handelSubmit();
      resetForm();
    },
  });
  const handelSubmit = async () => {
    setLoading(true);
    try {
      const registerValue = {
        firstName: formik?.values?.firstName,
        lastName: formik?.values?.lastName,
        email: formik?.values?.email,
        telephone: formik?.values?.telephone,
        address1: formik?.values?.address1,
        address2: formik?.values?.address2,
        city: formik?.values?.city,
        division: formik?.values?.division,
        district: formik?.values?.district,
        password: formik?.values?.password,
        repeatPassword: formik?.values?.repeatPassword,
      };
      const response = await axiosInstance.post(
        `/api/v1/register`,

        registerValue
      );

      if (response.status === 200) {
        toast.success(response?.data?.message);
        setLoading(false);
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
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
          <div className="flex lg:w-full gap-x-5 py-2">
            {/* first name */}
            <div className="flex-1">
              <label
                htmlFor="firstName"
                className="text-xl font-DmSans font-medium pb-1"
              >
                First Name
              </label>
              <div>
                <input
                  className="w-full py-3 border-b border-border font-normal text-base"
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Your First Name"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                {/* error message */}
                {formik.touched?.firstName && formik.touched.firstName ? (
                  <p className="text-red-600 text-sm font-normal font-DmSans mt-1 ">
                    {formik?.errors?.firstName}
                  </p>
                ) : null}
                {/* error message */}
              </div>
            </div>
            {/* first name */}
            {/* last name */}
            <div className="flex-1">
              <label
                htmlFor="lastName"
                className="text-xl font-DmSans font-medium pb-1"
              >
                Last Name
              </label>
              <div>
                <input
                  className="w-full py-3 border-b border-border font-normal text-base"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Your last Name"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
                {/* error message */}
                {formik.touched?.lastName && formik.touched.lastName ? (
                  <p className="text-red-600 text-sm font-normal font-DmSans mt-1 ">
                    {formik?.errors?.lastName}
                  </p>
                ) : null}
                {/* error message */}
              </div>
            </div>
            {/* last name */}
          </div>
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
            {/* telephone  */}
            <div className="flex-1">
              <label
                htmlFor="telephone"
                className="text-xl font-DmSans font-medium pb-1"
              >
                Telephone
              </label>
              <div>
                <input
                  className="w-full py-3 border-b border-border font-normal text-base"
                  type="text"
                  name="telephone"
                  id="telephone"
                  placeholder="Your Telephone"
                  onChange={formik.handleChange}
                  value={formik.values.telephone}
                />
                {/* error message */}
                {formik.touched?.telephone && formik.touched.telephone ? (
                  <p className="text-red-600 text-sm font-normal font-DmSans mt-1 ">
                    {formik?.errors?.telephone}
                  </p>
                ) : null}
                {/* error message */}
              </div>
            </div>
            {/* telephone */}
          </div>
          <div className="flex lg:w-full gap-x-5 py-2">
            {/* address1 */}
            <div className="flex-1">
              <label
                htmlFor="address1"
                className="text-xl font-DmSans font-medium pb-1"
              >
                Address1
              </label>
              <div>
                <input
                  className="w-full py-3 border-b border-border font-normal text-base"
                  type="text"
                  name="address1"
                  id="address1"
                  placeholder="Your  Address1"
                  onChange={formik.handleChange}
                  value={formik.values.address1}
                />
                {/* error message */}
                {formik.touched?.address1 && formik.touched.address1 ? (
                  <p className="text-red-600 text-sm font-normal font-DmSans mt-1 ">
                    {formik?.errors?.address1}
                  </p>
                ) : null}
                {/* error message */}
              </div>
            </div>
            {/* address1  */}
            {/* address2  */}
            <div className="flex-1">
              <label
                htmlFor="address2"
                className="text-xl font-DmSans font-medium pb-1"
              >
                Address2
              </label>
              <div>
                <input
                  className="w-full py-3 border-b border-border font-normal text-base"
                  type="text"
                  name="address2"
                  id="address2"
                  placeholder="Your Address2"
                  onChange={formik.handleChange}
                  value={formik.values.address2}
                />
                {/* error message */}
                {formik.touched?.address2 && formik.touched.address2 ? (
                  <p className="text-red-600 text-sm font-normal font-DmSans mt-1 ">
                    {formik?.errors?.address2}
                  </p>
                ) : null}
                {/* error message */}
              </div>
            </div>
            {/* address2 */}
          </div>
          <div className="flex lg:w-full gap-x-5 py-2">
            {/* city */}
            <div className="flex-1">
              <label
                htmlFor="city"
                className="text-xl font-DmSans font-medium pb-1"
              >
                City
              </label>
              <div>
                <input
                  className="w-full py-3 border-b border-border font-normal text-base"
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Your City"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                />
                {/* error message */}
                {formik.touched?.city && formik.touched.city ? (
                  <p className="text-red-600 text-sm font-normal font-DmSans mt-1 ">
                    {formik?.errors?.city}
                  </p>
                ) : null}
                {/* error message */}
              </div>
            </div>
            {/* city  */}
            {/* postcode  */}
            <div className="flex-1">
              <label
                htmlFor="postcode"
                className="text-xl font-DmSans font-medium pb-1"
              >
                Postcode
              </label>
              <div>
                <input
                  className="w-full py-3 border-b border-border font-normal text-base"
                  type="text"
                  name="postcode"
                  id="postcode"
                  placeholder="Your Postcode"
                  onChange={formik.handleChange}
                  value={formik.values.postcode}
                />
                {/* error message */}
                {formik.touched?.postcode && formik.touched.postcode ? (
                  <p className="text-red-600 text-sm font-normal font-DmSans mt-1 ">
                    {formik?.errors?.postcode}
                  </p>
                ) : null}
                {/* error message */}
              </div>
            </div>
            {/* postcode */}
          </div>
          <div className="flex lg:w-full gap-x-5 py-2">
            {/* division */}
            <div className="flex-1">
              <label
                htmlFor="division"
                className="text-xl font-DmSans font-medium pb-1"
              >
                Division
              </label>
              <div>
                <input
                  className="w-full py-3 border-b border-border font-normal text-base"
                  type="text"
                  name="division"
                  id="division"
                  placeholder="Your Division"
                  onChange={formik.handleChange}
                  value={formik.values.division}
                />
                {/* error message */}
                {formik.touched?.division && formik.touched.division ? (
                  <p className="text-red-600 text-sm font-normal font-DmSans mt-1 ">
                    {formik?.errors?.division}
                  </p>
                ) : null}
                {/* error message */}
              </div>
            </div>
            {/* division  */}
            {/* district  */}
            <div className="flex-1">
              <label
                htmlFor="district"
                className="text-xl font-DmSans font-medium pb-1"
              >
                District
              </label>
              <div>
                <input
                  className="w-full py-3 border-b border-border font-normal text-base"
                  type="text"
                  name="district"
                  id="district"
                  placeholder="Your District"
                  onChange={formik.handleChange}
                  value={formik.values.district}
                />
                {/* error message */}
                {formik.touched?.district && formik.touched.district ? (
                  <p className="text-red-600 text-sm font-normal font-DmSans mt-1 ">
                    {formik?.errors?.district}
                  </p>
                ) : null}
                {/* error message */}
              </div>
            </div>
            {/* district */}
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
            {/* repeat password  */}
            <div className="flex-1">
              <label
                htmlFor="repeatPassword"
                className="text-xl font-DmSans font-medium pb-1"
              >
                Repeat Password
              </label>
              <div>
                <input
                  className="w-full py-3 border-b border-border font-normal text-base"
                  type="text"
                  name="repeatPassword"
                  id="repeatPassword"
                  placeholder="Your  Repeat Password"
                  onChange={formik.handleChange}
                  value={formik.values.repeatPassword}
                />
                {/* error message */}
                {formik.touched?.repeatPassword &&
                formik.touched.repeatPassword ? (
                  <p className="text-red-600 text-sm font-normal font-DmSans mt-1 ">
                    {formik?.errors?.repeatPassword}
                  </p>
                ) : null}
                {/* error message */}
              </div>
            </div>
            {/*  Repeat Password */}
          </div>
        </div>
        {/* personal Info */}
        {/* login btn */}
        <div className="pt-10">
          <input
            disabled={loading}
            type="submit"
            value="Sign Up"
            className={`px-14 py-4 cursor-pointer bg-btnBg text-whiteColor font-DmSans text-xl font-bold rounded-md`}
          />
        </div>
        {/* login btn */}
      </form>
      <div className="w-1/2 lg:block md:block hidden">
        <img className=" object-cover mx-auto" src={GifImg} alt="GifImg" />
      </div>
    </div>
  );
};

export default SignUpForm;
