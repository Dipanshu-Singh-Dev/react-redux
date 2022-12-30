let initialstate = 0;

function CountReducer(state = { count: initialstate }, { type, payload }) {
  switch (type) {
    case "add":
      return { ...state, count: state.count + payload };
    case "sub":
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
}

export default CountReducer;
