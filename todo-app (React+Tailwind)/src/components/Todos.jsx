import { useEffect, useState } from "react";
import icon from "../assets/todo-icon.png";
import TodoItems from "./TodoItems";

const Todos = () => {
  // const initialRef = useRef();
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [],
  );

  useEffect(() => {
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const add = () => {
    // We are creating an object of the todo
    if (text !== "") {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        isComplete: false,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setText("");
    } else return;
    // THis prevTodos parameter is passed by react itself contains the old list, right side of the arrow is the returned value within the setTodos function
  };

  const deleteTodoItem = (idToDel) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== idToDel);
    });
  };

  const toggleIsCompleteFlag = (id) => {
    setTodos((prevTodoList) => {
      return prevTodoList.map((item) => {
        if (item.id === id) {
          return { ...item, isComplete: !item.isComplete };
        }
        return item; // all the other items who are not changed
      });
    });
  };

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-125 rounded-2xl">
      {/* Title */}
      <div className="flex items-center mt-7 gap-3 justify-center">
        <img src={icon} alt="" className="w-10" />
        <h1 className="text-3xl font-semiemi">Todo App</h1>
      </div>

      {/* Input */}
      <div className="flex items-center my-8 bg-gray-200 rounded-full">
        <input
          // ref={initialRef}
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          placeholder="Add your task"
          className="bg-transparent border-0 outline-none flex-1 h-11 pl-6 pr-2 placeholder:text-slate-600"
        />
        <button
          className="border-none rounded-full bg-orange-400 w-32 h-11 text-white text-lg font-medium cursor-pointer"
          onClick={add}
        >
          Add +{" "}
        </button>
      </div>

      {/* Todo lists */}
      <div>
        {/* <TodoItems text="Buy Groceries" />
        <TodoItems text="Complete Todo app" /> */}
        {/* <TodoItems text={text} /> */}
        {todos.map((item) => (
          <TodoItems
            text={item.text}
            key={item.id}
            id={item.id}
            isComplete={item.isComplete}
            deleteTodoItem={deleteTodoItem}
            toggleIsCompleteFlag={toggleIsCompleteFlag}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
