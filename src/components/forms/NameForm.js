import React from "react";
import FormTextField from "./shared/FormTextField";
import FormHeading from "./shared/FormHeading";
import FormButton from "./shared/FormButton";

const NameForm = ({ onSubmit }) => {
  return (
    <div className="w-full">
      <FormHeading
        header="Welcome! First things first..."
        subHeader="You can always change them later."
      />
      <form onSubmit={onSubmit}>
        <FormTextField label="Full Name" placeholder="Steve Jobs" />
        <FormTextField label="Display Name" placeholder="Steve" />
        <FormButton />
      </form>
    </div>
  );
};

export default NameForm;
