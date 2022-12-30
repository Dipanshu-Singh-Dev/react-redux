import React from "react";
import ActionCreator from "./ActionCreator/ActionCreator";
import countStore from "../Store/Store";
import { useSelector } from "react-redux";
const Counter = () => {
  const count = useSelector((countStore) => {
    return countStore.count;
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <button style={{ height: "100%" }} onClick={() => ActionCreator("add")}>
        +
      </button>
      <h1>{count}</h1>
      <button style={{ height: "100%" }} onClick={() => ActionCreator("sub")}>
        -
      </button>
    </div>
  );
};

export default Counter;
