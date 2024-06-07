import { Button, Typography } from "@mui/material";
import React from "react";
import NavBarLink from "./NavBarLink";
import { useTheme } from "../../providers/CustomThemeProvider";

export default function NavItem({ to, label, sx }) {
  const { isDark } = useTheme();
  const textColor = isDark ? "white" : "#2e7d32"; 

  return (
    <NavBarLink sx={sx} to={to}>
      <Button color="inherit">
        <Typography sx={{ color: textColor }}>
          {label}
        </Typography>
      </Button>
    </NavBarLink>
  );
}
