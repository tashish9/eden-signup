import React from "react";
import FormHeading from "./shared/FormHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import FormButton from "./shared/FormButton";

const CompletionForm = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-5">
      <div className=" flex justify-center items-center rounded-full h-14 w-14 bg-blue">
        <FontAwesomeIcon icon={faCheck} color="white" fontSize="1rem" />
      </div>
      <FormHeading
        header="Congratulations, Eren!"
        subHeader="You have completed onboarding , you can start using Eden!"
      />

      <FormButton label="Launch Eden" type="button" />
    </div>
  );
};

export default CompletionForm;
