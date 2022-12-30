export default function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      fetch("http://localhost:3000/todos", {
        method: "POST",
        body: JSON.stringify({
          title: action.payload.title,
          status: action.payload.status,
        }),
      });
      break;
    case "UPDATE":
      fetch(`http://localhost:3000/todos/${action.payload.id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: !action.payload.status }),
      });
      break;

    case "DELETE":
      fetch(`http://localhost:3000/todos/${action.payload.id}`, {
        method: "DELETE",
      });
      break;
    default:
      return fetch("http://localhost:3000/todos").then((res) => res.json());
  }
  return fetch("http://localhost:3000/todos").then((res) => res.json());
}
