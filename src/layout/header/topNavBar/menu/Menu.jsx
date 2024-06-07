import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";
import useUsers from "../../../../users/hooks/useUsers";
import MenuLink from "../../../../routes/components/MenuLink";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e7d32", // ירוק יערות גשם של האמזונאס
    },
    secondary: {
      main: "#ffcc80", // צבע משלים
    },
    background: {
      default: "#e8f5e9", // רקע ירוק בהיר
    },
  },
});

const Menu = ({ isOpen, anchorEl, onClose }) => {
  const { user } = useUser();
  const { handleLogout } = useUsers();

  const onLogout = () => {
    handleLogout();
    onClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <MuiMenu
        open={isOpen}
        onClose={onClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "background.default",
          },
        }}
      >
        <Box sx={{ padding: 2 }}>
          <MenuLink
            text="About"
            navigateTo={ROUTES.ABOUT}
            onClick={onClose}
            styles={{ display: { xs: "block", md: "none" } }}
            sx={{
              color: "primary.main",
              display: { xs: "block", md: "none" },
            }}
          />

          {!user && (
            <>
              <MenuLink
                text="Login"
                navigateTo={ROUTES.LOGIN}
                onClick={onClose}
                styles={{ display: { xs: "block", md: "none" } }}
                sx={{
                  color: "primary.main",
                  display: { xs: "block", md: "none" },
                }}
              />
              <MenuLink
                text="Signup"
                navigateTo={ROUTES.SIGNUP}
                onClick={onClose}
                styles={{ display: { xs: "block", md: "none" } }}
                sx={{
                  color: "primary.main",
                  display: { xs: "block", md: "none" },
                }}
              />
            </>
          )}
          {user && (
            <>
              <MenuLink
                text="Profile"
                navigateTo={ROUTES.PROFILE}
                onClick={onClose}
                sx={{ color: "primary.main" }}
              />
              <MenuLink
                text="Edit Account"
                navigateTo={ROUTES.EDIT_USER}
                onClick={onClose}
                sx={{ color: "primary.main" }}
              />
              <MenuItem onClick={onLogout} sx={{ color: "primary.main" }}>
                Logout
              </MenuItem>
            </>
          )}
        </Box>
      </MuiMenu>
    </ThemeProvider>
  );
};

export default Menu;
