import React, { useState } from "react";
import FormHeading from "./shared/FormHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import FormButton from "./shared/FormButton";

const EdenPlanForm = ({ onSubmit }) => {
  const [useCase, setUseCase] = useState("personal");
  return (
    <div className="w-full">
      <FormHeading
        header="How are you planning to use Eden?"
        subHeader="We'll streamline your setup experience accordingly"
      />

      <form onSubmit={onSubmit}>
        <div className="flex justify-between">
          <label
            className={`w-40 h-40 p-4 flex flex-col justify-between rounded-md cursor-pointer border border-lightgray border-solid  ${
              useCase === "personal" && "outline outline-blue outline-1"
            }`}
          >
            <input
              hidden
              name="use-case"
              type="radio"
              defaultChecked
              onChange={() => {
                setUseCase("personal");
              }}
            />
            <div className="">
              <FontAwesomeIcon
                fontSize="1.4rem"
                icon={faUser}
                color="#664DE5"
              />
            </div>
            <p className="text-base font-semibold"> For myself</p>
            <p className="text-xs leading-4 font-medium text-gray">
              Write better. Think more clearly. Stay organized.
            </p>
          </label>

          <label
            className={`w-40 h-40 p-4 flex flex-col justify-between rounded-md cursor-pointer border border-lightgray border-solid  ${
              useCase === "team" && "outline outline-blue outline-1"
            }`}
          >
            <input
              name="use-case"
              hidden
              type="radio"
              onChange={() => {
                setUseCase("team");
              }}
            />

            <div className="">
              <FontAwesomeIcon
                fontSize="1.4rem"
                icon={faPeopleGroup}
                color="#664DE5"
              />
            </div>
            <p className="text-base font-semibold"> With my team</p>
            <p className="text-xs leading-4 font-medium text-gray">
              Wikis, docs, tasks & projects, all in one place.
            </p>
          </label>
        </div>

        <FormButton />
      </form>
    </div>
  );
};

export default EdenPlanForm;
