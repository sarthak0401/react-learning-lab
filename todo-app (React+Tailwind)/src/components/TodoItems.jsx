import React from "react";
import tick from "../assets/tick.png";
import un_tick from "../assets/un_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({
  text,
  id,
  isComplete,
  deleteTodoItem,
  toggleIsCompleteFlag,
}) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex gap-3 items-center cursor-pointer">
        <img
          src={isComplete ? tick : un_tick}
          alt="tick-icon"
          className="w-7 cursor-pointer"
          onClick={() => toggleIsCompleteFlag(id)}
        />
        <p
          className={`cursor-pointer text-[17px] ${isComplete ? "line-through" : ""}`}
          onClick={() => toggleIsCompleteFlag(id)}
          //   style={{ textDecoration: isComplete ? "line-through" : "" }}
        >
          {text}
        </p>
      </div>
      <img
        src={delete_icon}
        alt="del-icon"
        className="w-7 cursor-pointer"
        onClick={() => deleteTodoItem(id)}
        // Remember when we need to pass arguments -> we use Arrow function, else we can call function directly
      />
    </div>
  );
};

export default TodoItems;
