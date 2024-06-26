import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useMenu } from "../menu/MenuProvider";

const Logged = () => {
  const setOpen = useMenu();
  return (
    <Tooltip title="Open settings">
      <IconButton sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}  onClick={() => setOpen(true)}>
        <Avatar alt="avatar" src="/adoption/public/assets/images/avatar.png" />
      </IconButton>
    </Tooltip>
  );
};

export default Logged;