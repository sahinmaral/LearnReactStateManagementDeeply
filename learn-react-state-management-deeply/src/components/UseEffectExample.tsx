import { useState, useEffect } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // In the closure , time value captured as zero
    // and locked zero forever.

    // const interval = setInterval(() => {
    //   setTime(time+1);
    // }, 1000);

    // To prevent this scenario , we can get
    // current value of our value at useState
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    // Clean up function
    return () => clearInterval(interval);
  }, []);

  return <div>Time:{time}</div>;
};

const UseEffectExample = () => {
  const [names, setNames] = useState<string[]>([]);

  const [selectedNameDetails, setSelectedNameDetails] = useState<{
    id: number;
    name: string;
  } | null>(null);

  useEffect(() => {
    fetch(`/data/names.json`)
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);

  // We can also execute this code with useEffect and useState
  // but our scenario executes only when any button that assigned this function on click event
  // triggers the click event. Because of behaviour of useEffect , our scenario also executes
  // when React renders this page.

  const onSelectedNameChange = (name: string) => {
    fetch(`/data/${name}.json`)
      .then((response) => response.json())
      .then((data) => setSelectedNameDetails(data));
  };

  // const [selectedName, setSelectedName] = useState<string | null>(null);

  // useEffect(() => {
  //   if(selectedName){
  //     fetch(`/data/${selectedName}.json`)
  //     .then((response) => response.json())
  //     .then((data) => setSelectedNameDetails(data));
  //   }
  // }, [selectedName]);

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1>useEffect Example</h1>
      <div>
        {names.map((name, index) => (
          <button className="btn btn-primary" key={index} onClick={() => onSelectedNameChange(name)}>
            {name}
          </button>
        ))}
      </div>
      <div>{JSON.stringify(selectedNameDetails)}</div>

      <StopWatch />
    </div>
  );
};

export default UseEffectExample;
