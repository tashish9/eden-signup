import React from "react";
import Step from "./step";

const stepsContent = ["1", "2", "3", "4"];

const Stepper = ({ stage = 1 }) => {
  console.log(stage);
  return (
    <section className={`p-5 w-full`}>
      <div className="flex items-center">
        {stepsContent.map((el, i, arr) => {
          if (i === arr.length - 1)
            return (
              <Step
                isStepActive={stage >= i + 1}
                stepContent={el}
                isStepFinal={true}
                key={el}
              />
            );
          return (
            <Step isStepActive={stage >= i + 1} stepContent={el} key={el} />
          );
        })}
      </div>
    </section>
  );
};

export default Stepper;
