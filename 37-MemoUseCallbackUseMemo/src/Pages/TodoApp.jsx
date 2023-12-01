import React, { useState, useReducer, useCallback, useMemo } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import Main from "./Main";

function reducer(state, action) {
  //   console.log(state);
  switch (action.type) {
    case "setTodo":
      return {
        ...state,
        todo: action.todo,
      };
      break;
    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
      break;
    case "getSearch":
      return {
        ...state,
        search: action.search,
      };
      break;

    default:
      break;
  }
}

// let dataFiltered=

function TodoApp() {
  console.log("app render");
  let [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    todo: "",
    todos: [],
    search: "",
  });

  const setTodo = useCallback((e) => {
    dispatch({
      todo: e.target.value,
      type: "setTodo",
    });
  }, []);

  //   const setTodo = (e) => {
  //     dispatch({
  //       todo: e.target.value,
  //       type: "setTodo",
  //     });
  //   };

  const getSearch = useCallback((e) => {
    dispatch({
      search: e.target.value,
      type: "getSearch",
    });
  }, []);

  const addTodo = useCallback(() => {
    dispatch({
      todo: state.todo,
      type: "addTodo",
    });
  }, [state.todo]);

  let dataFiltered = useMemo(() => {
    return state.todos.filter((elem) => elem.includes(state.search));
  }, [state.todos, state.search]);

  //   let dataFiltered = useMemo(() => {
  // let dataFiltered = state.todos.filter((elem) => elem.includes(state.search));
  // });
  //   console.log(dataFiltered);
  const increment = () => {
    setCount(++count);
  };

  // [1] == [1];

  return (
    <div>
      <h1>counter - {count}</h1>
      <button onClick={increment}>Inc</button>
      TodoApp
      <hr />
      <AddTodo setTodo={setTodo} addTodo={addTodo} getSearch={getSearch} />
      <hr />
      <Todos setTodo={setTodo} todos={dataFiltered} />
      <hr />
      {/* <Main setTodo={setTodo} /> */}
    </div>
  );
}

export default TodoApp;
