import React from "react";

function StepComponent(props) {
  return (
    <div className="01">
      <h1 className="text-3xl font-bold mb-7 text-[#0000002E]">
        {props.stepNumber}
      </h1>
      <h1 className="font-semibold text-2xl mb-2">{props.stepTitle}</h1>
      <p>{props.stepDescription}</p>
    </div>
  );
}

export default function Steps() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mt-20 mr-40 mb-0 ml-20">Steps</h1>;
      <div className="Steps mt-5 mr-60 mb-20 ml-20 flex">
        <StepComponent
          stepNumber="01"
          stepTitle="Sign Up"
          stepDescription="Create a free account to start discovering and promoting events."
        />
        <StepComponent
          stepNumber="02"
          stepTitle="Explore"
          stepDescription="Use our search and filter tools to find events that interest you"
        />
        <StepComponent
          stepNumber="03"
          stepTitle="Engage"
          stepDescription="Register for events, buytickets, and join discussions."
        />
        <StepComponent
          stepNumber="04"
          stepTitle="Promote"
          stepDescription="List your own events and take advantage of our tool."
        />
      </div>
    </div>
  );
}
