import React from "react";
import SignInForm from "../../Utils/SignInForm";

const SignIn = () => {
  return (
    <div className="container w-full h-view p-3 border-l border-r border-main ">
      <h2 className=" text-5xl font-bold text-fontBlack font-DmSans">
        Sign In
      </h2>
      <SignInForm />
    </div>
  );
};

export default SignIn;
