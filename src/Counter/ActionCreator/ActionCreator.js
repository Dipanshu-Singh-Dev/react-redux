import React from "react";
import countStore from "../../Store/Store";
const ActionCreator = (type) => {
  let payload = 1;
  switch (type) {
    case "add":
      countStore.dispatch({
        type: "add",
        payload,
      });
      break;
    case "sub":
      countStore.dispatch({
        type: "sub",
        payload,
      });
      break;
    default:
      countStore.dispatch({ count: 1 });
  }
};

export default ActionCreator;
