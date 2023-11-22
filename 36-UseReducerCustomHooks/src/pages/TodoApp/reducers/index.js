export default function reducer(state, action) {
  switch (action.type) {
    case "setValue":
      return {
        value: action.value,
        todos: state.todos,
      };

      break;
    case "addTodo":
      return {
        value: "",
        todos: [...state.todos, action.value],
      };
      break;
    case "delTodo":
      return {
        value: "",
        todos: [],
      };
      break;

    default:
      break;
  }
}
