import React, { useReducer } from "react";

enum NameActionKind {
  SET_NAME = "SET_NAME",
  ADD_NAME = "ADD_NAME",
  DELETE_NAME = "DELETE_NAME",
}

interface NameAction {
  type: NameActionKind;
  payload: string;
}

interface NameState {
  name: string;
  names: string[];
}

const UseReducerExample: React.FunctionComponent = () => {
  const nameReducer = (state: NameState, action: NameAction) => {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "ADD_NAME":
        return { ...state, names: [...state.names, action.payload], name: "" };
      case "DELETE_NAME":
        return {
          ...state,
          names: [...state.names.filter((name) => name !== action.payload)],
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(nameReducer, {
    names: ["Adam", "Ben"],
    name: "",
  });

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1>useReducer Example</h1>

      <ul>
        {state.names.map((name: string, index: number) => {
          return (
            <li key={index}>
              {name}{" "}
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  dispatch({
                    type: NameActionKind.DELETE_NAME,
                    payload: name,
                  });
                }}
              >
                -
              </button>
            </li>
          );
        })}
      </ul>

      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: NameActionKind.SET_NAME, payload: e.target.value })
        }
      />
      <div>Name : {state.name}</div>

      <button
        type="button"
        onClick={() =>
          dispatch({ type: NameActionKind.ADD_NAME, payload: state.name })
        }
      >
        Add Name
      </button>
    </div>
  );
};

export default UseReducerExample;
