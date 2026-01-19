import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const Tasks = ({ item, fetchDetailsOfCurrentTodo }) => {
  console.log(item);
  return (
    <Card
      sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography variant="h5" color={"text.secondary"}>
          {item?.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            opacity: "0.75",
            "&:hover": {
              opacity: "1",
            },
          }}
          onClick={() => {
            fetchDetailsOfCurrentTodo(item.id);
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Tasks;
