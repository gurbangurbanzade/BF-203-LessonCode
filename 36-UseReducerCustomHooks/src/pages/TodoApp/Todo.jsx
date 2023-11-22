import React, { useState, useReducer } from "react";
import Header from "./Header";
import Footer from "./Footer";
import reducer from "./reducers";

function Todo() {
  // bunlar yalniz asagidaki to do ucundur
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  // buranin yuxari ile elaqesi yoxdur ayri dunyalardir
  const [state, dispatch] = useReducer(reducer, {
    value: "",
    todos: [],
    wishlis: [],
    basket: [],
  });

  console.log("state-", state);

  return (
    <div>
      <div>
        <h1>reducer To do</h1>
        <input
          value={state.value}
          type="text"
          onChange={(e) => {
            dispatch({
              value: e.target.value,
              type: "setValue",
            });
          }}
        />
        <button
          onClick={() => {
            dispatch({
              value: state.value,
              type: "addTodo",
            });
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "delTodo",
            });
          }}
        >
          All delete
        </button>
      </div>
      <div>
        <ul>
          {state.todos &&
            state.todos.map((elem, i) => {
              return <li key={i}>{elem}</li>;
            })}
          <li></li>
          <li></li>
        </ul>
      </div>
      <h1>State Todo</h1>
      <Header
        value={value}
        setValue={setValue}
        todos={todos}
        setTodos={setTodos}
      />
      <Footer todos={todos} />
      {/* <Header
      state={state}
      dispatch={dispatch}
     
      />
      <Footer todos={state.todos} /> */}
    </div>
  );
}

export default Todo;
