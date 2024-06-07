import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "../providers/CustomThemeProvider";

export default function ErrorPage() {
  const { isDark } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: isDark ? "#121212" : "#e8f5e9",
        padding: 2,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{ color: isDark ? "#e0f7fa" : "#2e7d32", marginBottom: 2 }}
      >
        Error 404
      </Typography>
      <Typography
        variant="h6"
        sx={{ color: isDark ? "#80cbc4" : "#004d40", marginBottom: 2 }}
      >
        Page not found
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: isDark ? "#80cbc4" : "#00796b", maxWidth: "600px" }}
      >
        System Overload. We apologize for the technical hiccup.
      </Typography>
    </Box>
  );
}
