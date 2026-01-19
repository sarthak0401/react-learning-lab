import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";
import React, { Fragment } from "react";

const TodoDetails = ({
  todoDetails,
  openDialog,
  setOpenDialog,
  setTodoDetails,
}) => {
  return (
    <Fragment>
      <Dialog open={openDialog}>
        <DialogTitle>{todoDetails?.todo}</DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenDialog(false);
              setTodoDetails(null);
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default TodoDetails;
