import React from "react";
import FormButton from "./shared/FormButton";
import FormHeading from "./shared/FormHeading";
import FormTextField from "./shared/FormTextField";

const WorkspaceForm = ({ onSubmit }) => {
  return (
    <div className="w-full">
      <FormHeading
        header="Let's set up a home for all your work"
        subHeader="You can always create another workspace later"
      />
      <form onSubmit={onSubmit}>
        <FormTextField label="Workspace Name" />
        <div className="w-full text-sm relative">
          <label
            className="block font-medium  capitalize mb-1"
            htmlFor="workspace-url"
          >
            Workspace URL
          </label>

          <div className="w-full flex">
            <input
              disabled
              className="border border-lightgray  p-3 w-2/5  rounded-l-md"
              placeholder="www.eden.com/"
            />

            <input
              id="workspace-url"
              className="border border-lightgray  p-3 w-3/5 rounded-r-md "
              placeholder="Example"
            />
          </div>
        </div>
        <FormButton />
      </form>
    </div>
  );
};

export default WorkspaceForm;
