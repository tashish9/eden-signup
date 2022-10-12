import React from "react";
import NameForm from "./NameForm";
import WorkspaceForm from "./WorkspaceForm";
import EdenPlanForm from "./EdenPlanForm";
import CompletionForm from "./CompletionForm";

const SignUpForm = ({ stage, setStage }) => {
  console.log(stage);

  const onFormSubmit = () => {
    setStage((prevStage) => prevStage + 1);
  };

  switch (stage) {
    case 1:
      return <NameForm onSubmit={onFormSubmit} />;
    case 2:
      return <WorkspaceForm onSubmit={onFormSubmit} />;
    case 3:
      return <EdenPlanForm onSubmit={onFormSubmit} />;
    case 4:
      return <CompletionForm />;
    default:
      return <NameForm />;
  }
};

export default SignUpForm;
