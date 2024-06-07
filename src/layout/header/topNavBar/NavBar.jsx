import React from "react";
import LeftNavBar from "./left-navigation/LeftNavBar";
import { AppBar, Toolbar } from "@mui/material";
import RightNavBar from "./right-navigation/RightNavBar";
import { MenuProvider } from "./menu/MenuProvider";

export default function NavBar() {
  return (
    <MenuProvider>
      <AppBar 
        position="sticky" 
        sx={{ 
          backgroundColor: '#004d40',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', 
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <LeftNavBar />
          <RightNavBar />
        </Toolbar>
      </AppBar>
    </MenuProvider>
  );
}
