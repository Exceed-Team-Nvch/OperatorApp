import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export const AddOperatorModal = ({
  isOpenModal,
  handleOpen,
  addOperator,
}: any) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Modal
      open={isOpenModal}
      onClose={handleOpen}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Card className="modal-card">
        <Grid container direction="column" alignItems="center" justify="center">
          <Typography>Enter name of telecom operator</Typography>
          <TextField
            placeholder="Tele2 - example"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <Button
            variant="contained"
            color="primary"
            className="modal-btn"
            onClick={() => addOperator(inputValue)}
          >
            Save
          </Button>
        </Grid>
      </Card>
    </Modal>
  );
};
