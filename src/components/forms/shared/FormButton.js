import React from "react";

const FormButton = ({ type = "submit", label = "Create Workspace" }) => {
  return (
    <button
      className="w-full bg-blue mt-4 py-3 border-0 text-white rounded-md text-sm"
      type={type}
    >
      {label}
    </button>
  );
};

export default FormButton;
