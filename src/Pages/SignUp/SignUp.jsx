import React from "react";
import SignUpForm from "../../Utils/SignUpForm";

const SignUp = () => {
  return (
    <div className="container w-full h-view p-3 border-l border-r border-main ">
      <h2 className=" text-5xl font-bold text-fontBlack font-DmSans">
        Sign up
      </h2>
      {/* Your personal details */}
      <div>
        <h1 className=" text-3xl font-bold text-fontBlack font-DmSans py-10">
          Your Personal Details
        </h1>
        {/* form control */}
        <div>
          <SignUpForm />
        </div>
        {/* form control */}
      </div>
      {/* Your personal details */}
    </div>
  );
};

export default SignUp;
