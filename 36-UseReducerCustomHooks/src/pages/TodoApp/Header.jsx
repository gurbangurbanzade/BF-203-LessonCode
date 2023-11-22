import React from "react";

function Header({ value, setValue, todos, setTodos }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodos([...todos, value]);
          setValue("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Header;
