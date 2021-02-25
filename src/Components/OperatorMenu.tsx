import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { AddOperatorModal } from "./AddOperatorModal";

export const OperatorMenu: FC = () => {
  const [operators, setOperators] = useState(["MTC", "Beeline", "Megaphone"]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpen = () => {
    setIsOpenModal(!isOpenModal);
  };

  const addOperator = (operator: string) => {
    operator && !operators.includes(operator)
      ? setOperators(operators.concat(operator))
      : alert("Oops! something gone wrong");
  };

  return (
    <AppBar position="static">
      <Toolbar className="menu-toolbar">
        <Button
          variant="contained"
          color="primary"
          className="add-btn"
          onClick={handleOpen}
        >
          Add a new telecom operator
        </Button>
        {operators.map((item, index) => (
          <Link to={`/refill-page/${item}`} className="menu-link" key={index}>
            {item}
          </Link>
        ))}
      </Toolbar>
      <AddOperatorModal
        isOpenModal={isOpenModal}
        handleOpen={handleOpen}
        addOperator={addOperator}
      />
    </AppBar>
  );
};
