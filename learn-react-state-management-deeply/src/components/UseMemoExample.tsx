import React, { useState, useMemo } from "react";
import randomNumberArray from "../randomNumberArray";

const UseMemoExample = () => {
  const [numbers] = useState<number[]>(randomNumberArray);

  const [names] = useState<string[]>(["john", "paul", "george", "ringo"]);

  // Scenary 1 : Expensive calculations
  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  // Sort function mutates an actual array and
  // because of that it understands that state is changed
  //const sortedNames = names.sort();

  // To prevent , we can get copy of our actualy array but
  // after any state changed , this sort function is
  // executes even names array hasn't changed yet
  //const sortedNames = [...names].sort();

  // Scenary 2 : Process functions at actualy array or object
  const sortedNames = useMemo(()=>[...names].sort(),[names]);

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1>useMemo Example</h1>

      <div>Total : {total}</div>
      <div>Names : {names.join(",")}</div>
      <div>Sorted Names : {sortedNames.join(",")}</div>
    </div>
  );
};

export default UseMemoExample;
