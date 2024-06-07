import { Fab,Tooltip,Zoom } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function EditUserButton() {
  const navigate = useNavigate();

  const handleUserEdit = () =>{
    navigate(ROUTES.EDIT_USER)
  }
  return (
    <Tooltip title="Edit" TransitionComponent={Zoom} arrow placement="left">
    <Fab
      color="primary"
      aria-label="add"
      sx={{
        position: "fixed",
        bottom: 75,
        right: 16,
      }}
      onClick={() => handleUserEdit()}
    >
      <ModeEditIcon />
    </Fab>
    </Tooltip>
  );
}