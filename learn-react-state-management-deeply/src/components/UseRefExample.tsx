import { useRef, useState } from "react";

const UseRefExample: React.FunctionComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  //   useEffect(() => {
  //     if (inputRef.current) {
  //       inputRef.current.focus();
  //     }
  //   }, []);

  const idRef = useRef<number>(1);

  const [names, setNames] = useState<{ id: number; name: string }[]>([
    { id: idRef.current++, name: "John" },
    { id: idRef.current++, name: "Jane" },
  ]);

  const onAddName = () => {
    if (inputRef.current) {
      setNames([
        ...names,
        { id: idRef.current++, name: inputRef.current.value },
      ]);
      console.log(JSON.stringify(names));
      inputRef.current.value = "";
    }
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1>useRef Example</h1>
      <div>
        {names.map((element) => {
          return (
            <div key={element.id}>
              {element.id} - {element.name}
            </div>
          );
        })}
      </div>
      <input type="text" ref={inputRef} />
      <button className="btn btn-primary"onClick={() => onAddName()}>Add Name</button>
    </div>
  );
};

export default UseRefExample;
