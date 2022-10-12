import React, { useState } from "react";
import logo from "../images/logo.png";
import SignUpForm from "./forms/SignUpForm";
import Stepper from "./stepper/Stepper";

const WelcomeForm = () => {
  const [currentFormStage, setCurrentFormStage] = useState(1);
  return (
    <main className="min-h-screen w-full sm:w-1/2 lg:w-4/12 xl:w-3/12 flex flex-col mx-auto justify-center items-center">
      {/* Logo container */}
      <div className="justify-center flex text-2xl items-center font-bold gap-1 p-6">
        <img src={logo} alt="logo" className="w-8 "></img>
        <p className="text-black"> Eden</p>
      </div>

      {/* Stepper  */}
      <div className="w-full py-4">
        <Stepper stage={currentFormStage} />
      </div>

      {/* FormContainer */}
      <div className="w-full p-3">
        <SignUpForm stage={currentFormStage} setStage={setCurrentFormStage} />
      </div>
    </main>
  );
};

export default WelcomeForm;
