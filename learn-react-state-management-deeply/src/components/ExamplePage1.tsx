import React from "react";
import UseEffectExample from "./UseEffectExample";
import UseMemoExample from "./UseMemoExample";
import UseReducerExample from "./UseReducerExample";
import UseRefExample from "./UseRefExample";

const ExamplePage1: React.FunctionComponent = () => {
  return (
    <div>
      <UseReducerExample />
      <UseMemoExample />
      <UseEffectExample />
      <UseRefExample />
    </div>
  );
};

export default ExamplePage1;
