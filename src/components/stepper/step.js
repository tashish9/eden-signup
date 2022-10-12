import React, { Fragment } from "react";

const Step = ({ isStepFinal = false, stepContent, isStepActive = false }) => {
  return (
    <Fragment>
      <div className="flex items-center">
        <div
          className={`rounded-full transition duration-500 ease-in-out md:p-1 h-6 w-6 md:h-8 md:w-8 border-2  ${
            isStepActive
              ? "text-white bg-blue border-blue"
              : "text-gray bg-white border-lightgray"
          }`}
        >
          <p className=" text-center text-sm  font-light">{stepContent}</p>
        </div>
      </div>

      {!isStepFinal && (
        <Fragment>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              isStepActive ? "border-blue" : "border-lightgray"
            }`}
          ></div>
          {/* <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-lightgray"></div> */}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Step;
