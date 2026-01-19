import { useEffect, useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import classes from "./styles.module.css";
import TodoDetails from "./components/TodoDetails";
import { Skeleton } from "@mui/material";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  async function fetchAllTheTodos() {
    try {
      setLoading(true);

      const apiResp = await fetch("https://dummyjson.com/todos");
      const res = await apiResp.json();
      console.log(res);

      if (res?.todos?.length > 0) {
        setTodoList(res?.todos);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e);
    }
  }

  async function fetchDetailsOfCurrentTodo(currentTodoID) {
    console.log(currentTodoID);
    try {
      const apiResp = await fetch(
        `https://dummyjson.com/todos/${currentTodoID}`,
      );
      const result = await apiResp.json();

      if (result) {
        setTodoDetails(result);
        setOpenDialog(true);
      } else {
        setTodoDetails(null);
        setOpenDialog(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  // Loading the list of Todo at the load of page
  useEffect(() => {
    fetchAllTheTodos();
  }, []);

  if (loading)
    return <Skeleton variant="rectangular" width={650} height={650} />;
  return (
    <div>
      <h1>Simple Todo app using Material UI</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        {todoList.map((item, index) => (
          <Tasks
            item={item}
            key={index}
            fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}
          />
        ))}
      </div>
      <TodoDetails
        openDialog={openDialog}
        todoDetails={todoDetails}
        setOpenDialog={setOpenDialog}
        setTodoDetails={setTodoDetails}
      />
    </div>
  );
}

export default App;
