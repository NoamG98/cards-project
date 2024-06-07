import React from "react";
import { Box } from "@mui/material";
import LogoIcon from "../logo/LogoIcon";
import Logo from "../logo/Logo";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";

export default function LeftNavBar() {
  const { user } = useUser();

  return (
    <Box>
      <LogoIcon />
      <Logo />
      <NavItem to={ROUTES.ABOUT} label="About" sx={{ color: 'black' }} />
      {user && (
        <>
          <NavItem to={ROUTES.FAV_CARDS} label="Favorite Cards" sx={{ color: 'black' }} />
          {(user.isAdmin || user.isBusiness) && (
            <>
              <NavItem to={ROUTES.CARDS} label="Cards" sx={{ color: 'black' }} />
              <NavItem to={ROUTES.MY_CARDS} label="My Cards" sx={{ color: 'black' }} />
            </>
          )}
        </>
      )}
    </Box>
  );
}
