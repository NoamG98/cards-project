import React from "react";
import NavBar from "./topNavBar/NavBar.jsx";
import Box from "@mui/material/Box";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        padding: 2,
        backgroundColor: "#004d40", 
      }}
    >
      <NavBar />
    </Box>
  );
}
